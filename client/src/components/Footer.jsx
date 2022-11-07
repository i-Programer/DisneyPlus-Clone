import { Facebook, Twitter } from "@material-ui/icons";
import React from "react";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-mainColor h-1/2 w-full flex md:flex-row flex-col items-start mb-10">
        <div className="p-5">
          <ul>
            <p className="text-white font-base text-sm pb-4 text-left">
              <span className="mr-4">{t("Footer.about")}</span>
              <span className="mr-4">{t("Footer.policy")}</span>
              <span className="mr-4">{t("Footer.private")}</span>
              <span className="mr-4">{t("Footer.qna")}</span>
              <span className="mr-4">{t("Footer.Feedback")}</span>
            </p>
            <li className="text-white font-base text-xs pb-4 text-left">
            {t("Footer.copyright")}
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-base text-sm pb-4 text-left">
            {t("Footer.connext")}
            </p>
            <div className="flex gap-6 pb-5">
              <Facebook className="text-2xl cursor-pointer w-10 h-10 bg-mainColor/20 rounded-md" />
              <Twitter className="text-2xl cursor-pointer w-10 h-10 bg-mainColor/20 rounded-md" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-base text-sm pb-4 text-left">
              Disney+ Hotstar App
            </p>
            <div className="flex gap-6 item items-start pb-5">
              <a
                className="playstore"
                href="https://play.google.com/store/apps/details?id=in.startv.hotstar.dplus"
                target="_blank"
                rel="noopener noreferrer"
                style={{width:"7rem"}}
              >
                <img src="/img/button/GoogleStore.png" alt="Google Play" />
              </a>
              <a
                className="appstore"
                href="https://apps.apple.com/id/app/id1524156685"
                target="_blank"
                rel="noopener noreferrer"
                style={{width:"7rem"}}
              >
                <img src="/img/button/AppStore.png" alt="Google Play" />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
