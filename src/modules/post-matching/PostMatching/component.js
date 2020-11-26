import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  AutoComplete,
  Button,
  Radio,
  Space,
  Spin,
  Steps,
  Typography,
} from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import { APPOINTMENT_TYPE_IDS, OWNER_IDS, EN, ES } from '../../constants';

import { adaptTherapistOptions } from './utils/adaptTherapistOptions';
import { adaptCustomerOptions } from './utils/adaptCustomerOptions';
import { filterOption } from './utils/filterOption';
import { getCustomerEmailContent } from './utils/getCustomerEmailContent';
import { getBookingLink } from './utils/getBookingLink';
import { getTherapistEmailContent } from './utils/getTherapistEmailContent';
import styles from './styles.module.css';

const { Step } = Steps;

export const Component = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [activeStep, setActiveStep] = useState(0);

  const [languageCode, setLanguageCode] = useState(null);

  const [therapistOptions, setTherapistOptions] = useState(null);
  const [isTherapistLoading, setIsTherapistLoading] = useState(false);
  const [therapistId, setTherapistId] = useState(null);

  const [customerOptions, setCustomerOptions] = useState(null);
  const [isCustomerLoading, setIsCustomerLoading] = useState(false);
  const [customerId, setCustomerId] = useState(null);

  const customerEmailContainer = useRef(null);
  const [customerEmailContent, setCustomerEmailContent] = useState(null);
  const [isCustomerEmailCopied, setIsCustomerEmailCopied] = useState(false);

  const [bookingLink, setBookingLink] = useState(null);
  const [hasClickedBook, setHasClickedBook] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const therapistEmailContainer = useRef(null);
  const [therapistEmailContent, setTherapistEmailContent] = useState(null);
  const [isTherapistEmailCopied, setIsTherapistEmailCopied] = useState(false);

  useEffect(() => {
    if (languageCode === null) return;

    const getOptions = async () => {
      const accessToken = await getAccessTokenSilently();

      setIsTherapistLoading(true);
      setIsCustomerLoading(true);

      const therapistsResult = await fetch(
        `${process.env.ACUITY_SERVER_BASE_URI}/therapists/?languageCode=${languageCode}`,
        {
          headers: {
            ['Authorization']: `Bearer ${accessToken}`,
          },
        }
      ).then(response => response.json());

      const customersResult = await fetch(
        `${process.env.ACUITY_SERVER_BASE_URI}/customers/?languageCode=${languageCode}`,
        {
          headers: {
            ['Authorization']: `Bearer ${accessToken}`,
          },
        }
      ).then(response => response.json());

      const nextTherapistOptions = adaptTherapistOptions(therapistsResult);
      const nextCustomerOptions = adaptCustomerOptions(customersResult);

      setIsTherapistLoading(false);
      setIsCustomerLoading(false);

      setTherapistOptions(nextTherapistOptions);
      setCustomerOptions(nextCustomerOptions);
    };

    getOptions();
  }, [languageCode]);

  useEffect(() => {
    if ([therapistId, customerId].includes(null)) return;

    const nextCustomerEmailContent = getCustomerEmailContent({
      therapistOptions,
      therapistId,
      customerOptions,
      customerId,
      languageCode,
    });

    setCustomerEmailContent(nextCustomerEmailContent);

    const nextBookingLink = getBookingLink({
      therapistOptions,
      therapistId,
      customerOptions,
      customerId,
      languageCode,
    });

    setBookingLink(nextBookingLink);

    setActiveStep(2);
  }, [therapistId, customerId]);

  useEffect(() => {
    if ([therapistId, customerId].includes(null)) return;

    const getCertificate = async () => {
      const accessToken = await getAccessTokenSilently();

      const certificate = await fetch(
        `${process.env.ACUITY_SERVER_BASE_URI}/certificate/?customerId=${customerId}&languageCode=${languageCode}`,
        {
          headers: {
            ['Authorization']: `Bearer ${accessToken}`,
          },
        }
      ).then(response => response.json());

      const nextBookingLink = getBookingLink({
        therapistOptions,
        therapistId,
        customerOptions,
        customerId,
        certificate,
        languageCode,
      });

      setBookingLink(nextBookingLink);
    };

    getCertificate();
  }, [therapistId, customerId]);

  useEffect(() => {
    if (!customerEmailContainer.current) return;

    customerEmailContainer.current.innerHTML = customerEmailContent || '';
  }, [customerEmailContent]);

  useEffect(() => {
    if (!isBooked) return;

    const getAppointments = async () => {
      const accessToken = await getAccessTokenSilently();

      const appointments = await fetch(
        `${process.env.ACUITY_SERVER_BASE_URI}/appointments/?customerId=${customerId}&languageCode=${languageCode}`,
        {
          headers: {
            ['Authorization']: `Bearer ${accessToken}`,
          },
        }
      ).then(response => response.json());

      const { datetime, calendarTimezone } = appointments.find(
        ({ appointmentTypeID }) =>
          appointmentTypeID ===
          Number(
            APPOINTMENT_TYPE_IDS[OWNER_IDS[languageCode]].INDIVIDUAL_THERAPY
          )
      );

      const nextTherapistEmailContent = getTherapistEmailContent({
        therapistOptions,
        therapistId,
        customerOptions,
        customerId,
        languageCode,
        dateTime: datetime,
        timezone: calendarTimezone,
      });

      setTherapistEmailContent(nextTherapistEmailContent);
    };

    getAppointments();
  }, [isBooked]);

  useEffect(() => {
    if (!therapistEmailContainer.current) return;

    therapistEmailContainer.current.innerHTML = therapistEmailContent || '';
  }, [therapistEmailContent]);

  const copyHtmlToClipboard = useCallback(node => {
    if (!window || !window.getSelection) return;

    const range = window.document.createRange();

    range.selectNode(node);

    const selection = window.getSelection();

    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');

    selection.removeAllRanges();
  }, []);

  const handleChangeLanguageCode = useCallback(({ target: { value } }) => {
    setLanguageCode(value);
    setActiveStep(1);
  }, []);

  const handleSelectTherapist = useCallback(
    value => {
      const nextTherapistId = therapistOptions.find(
        option => option.value === value
      ).id;

      setTherapistId(nextTherapistId);
    },
    [therapistOptions]
  );

  const handleSelectCustomer = useCallback(
    value => {
      const nextCustomerId = customerOptions.find(
        option => option.value === value
      ).id;

      setCustomerId(nextCustomerId);
    },
    [customerOptions]
  );

  const handleCopyCustomerEmail = useCallback(() => {
    copyHtmlToClipboard(customerEmailContainer.current);
    setIsCustomerEmailCopied(true);
  }, []);

  const handleFinishCustomerEmail = useCallback(() => {
    setActiveStep(3);
  }, []);

  const handleClickBook = useCallback(() => {
    setHasClickedBook(true);
  }, []);

  const handleFinishBook = useCallback(() => {
    setIsBooked(true);
    setActiveStep(4);
  }, []);

  const handleCopyTherapistEmail = useCallback(() => {
    copyHtmlToClipboard(therapistEmailContainer.current);
    setIsTherapistEmailCopied(true);
  }, []);

  const handleReset = useCallback(() => {
    setActiveStep(0);

    setLanguageCode(null);

    setTherapistOptions(null);
    setIsTherapistLoading(false);
    setTherapistId(null);

    setCustomerOptions(null);
    setIsCustomerLoading(false);
    setCustomerId(null);

    setCustomerEmailContent(null);
    setIsCustomerEmailCopied(false);

    setBookingLink(null);
    setHasClickedBook(false);
    setIsBooked(false);

    setTherapistEmailContent(null);
    setIsTherapistEmailCopied(false);
  }, []);

  return (
    <div className={styles.container}>
      <Steps current={activeStep} size="small">
        <Step title="Pick language" />
        <Step title="Pick people" />
        <Step title="Get customer email" />
        <Step title="Book session" />
        <Step title="Get therapist email" />
      </Steps>
      <div className={styles.content}>
        {
          [
            <Radio.Group
              buttonStyle="solid"
              onChange={handleChangeLanguageCode}
              optionType="button"
              options={[
                { label: 'English', value: EN },
                { label: 'Spanish', value: ES },
              ]}
              value={languageCode}
            />,
            <Spin spinning={isTherapistLoading || isCustomerLoading}>
              <Space>
                <span>
                  <Typography.Paragraph disabled={therapistOptions === null}>
                    Therapist
                  </Typography.Paragraph>
                  <AutoComplete
                    filterOption={filterOption}
                    onSelect={handleSelectTherapist}
                    options={therapistOptions}
                    placeholder={
                      languageCode === EN ? 'Maria Xenaki' : 'Ana Luis'
                    }
                    style={{ width: 200 }}
                  />
                </span>
                <span>
                  <Typography.Paragraph disabled={customerOptions === null}>
                    Customer
                  </Typography.Paragraph>
                  <AutoComplete
                    filterOption={filterOption}
                    onSelect={handleSelectCustomer}
                    options={customerOptions}
                    placeholder={
                      languageCode === EN ? 'George Simons' : 'Jorge Esimones'
                    }
                    style={{ width: 200 }}
                  />
                </span>
              </Space>
            </Spin>,
            <Space direction="vertical">
              <div
                className={styles.emailBox}
                ref={customerEmailContainer}
              ></div>
              {isCustomerEmailCopied ? (
                <Fragment>
                  <Typography.Paragraph>
                    <CheckOutlined size="large" /> Now you can paste the email
                    into your Gmail
                  </Typography.Paragraph>
                  <Button onClick={handleFinishCustomerEmail} type="primary">
                    I'm done
                  </Button>
                </Fragment>
              ) : (
                <Button onClick={handleCopyCustomerEmail} type="primary">
                  Copy email to clipboard
                </Button>
              )}
            </Space>,
            hasClickedBook ? (
              <Button onClick={handleFinishBook} type="primary">
                I'm done
              </Button>
            ) : (
              <Button
                href={bookingLink}
                onClick={handleClickBook}
                target="_blank"
                type="primary"
              >
                Book session in Acuity
              </Button>
            ),
            <Space direction="vertical">
              <Spin spinning={!therapistEmailContent}>
                <div
                  className={styles.emailBox}
                  ref={therapistEmailContainer}
                ></div>
              </Spin>
              {isTherapistEmailCopied ? (
                <Fragment>
                  <Typography.Paragraph>
                    <CheckOutlined size="large" /> Now you can paste the email
                    into your Gmail
                  </Typography.Paragraph>
                  <Button onClick={handleReset} type="primary">
                    Start again
                  </Button>
                </Fragment>
              ) : (
                <Button onClick={handleCopyTherapistEmail} type="primary">
                  Copy email to clipboard
                </Button>
              )}
            </Space>,
          ][activeStep]
        }
      </div>
    </div>
  );
};

Component.displayName = 'PostMatching';
