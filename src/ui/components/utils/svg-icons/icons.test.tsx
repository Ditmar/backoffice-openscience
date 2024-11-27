// src/ui/components/utils/svg-icons/icons.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Icon } from './icons';

// Importación directa de SVGs usando import
import add from '../../../../assets/icons/add.svg?raw';
import addCalendar from '../../../../assets/icons/add-calendar.svg?raw';
import alertIcon from '../../../../assets/icons/alert.svg?raw';
import angleDown from '../../../../assets/icons/angle-down.svg?raw';
import angleLeft from '../../../../assets/icons/angle-left.svg?raw';
import angleRight from '../../../../assets/icons/angle-right.svg?raw';
import angleUp from '../../../../assets/icons/angle-up.svg?raw';
import archive from '../../../../assets/icons/archive.svg?raw';
import articleManagement from '../../../../assets/icons/article-management.svg?raw';
import authorManagement from '../../../../assets/icons/author-management.svg?raw';
import bag from '../../../../assets/icons/bag.svg?raw';
import basket from '../../../../assets/icons/basket.svg?raw';
import bibliographines from '../../../../assets/icons/bibliographines.svg?raw';
import box from '../../../../assets/icons/box.svg?raw';
import calendar from '../../../../assets/icons/calendar.svg?raw';
import card from '../../../../assets/icons/card.svg?raw';
import chart from '../../../../assets/icons/chart.svg?raw';
import chat from '../../../../assets/icons/chat.svg?raw';
import circleAdd from '../../../../assets/icons/circle-add.svg?raw';
import circleDelete from '../../../../assets/icons/circle-delete.svg?raw';
import circleDown from '../../../../assets/icons/circle-down.svg?raw';
import circleLeft from '../../../../assets/icons/circle-left.svg?raw';
import circleRemove from '../../../../assets/icons/circle-remove.svg?raw';
import circleRight from '../../../../assets/icons/circle-right.svg?raw';
import circleUp from '../../../../assets/icons/circle-up.svg?raw';
import clip from '../../../../assets/icons/clip.svg?raw';
import cloud from '../../../../assets/icons/cloud.svg?raw';
import contentManagement from '../../../../assets/icons/content-management.svg?raw';
import copy from '../../../../assets/icons/copy.svg?raw';
import cut from '../../../../assets/icons/cut.svg?raw';
import deleteCalendar from '../../../../assets/icons/delete-calendar.svg?raw';
import deletes from '../../../../assets/icons/deletes.svg?raw';
import dinamicBannerManagement from '../../../../assets/icons/dinamic-banner-management.svg?raw';
import discount from '../../../../assets/icons/discount.svg?raw';
import downArrow from '../../../../assets/icons/down-arrow.svg?raw';
import down from '../../../../assets/icons/down.svg?raw';
import download from '../../../../assets/icons/download.svg?raw';
import emptyCalendar from '../../../../assets/icons/empty-calendar.svg?raw';
import emptyFile from '../../../../assets/icons/empty-file.svg?raw';
import eye from '../../../../assets/icons/eye.svg?raw';
import file from '../../../../assets/icons/file.svg?raw';
import folder from '../../../../assets/icons/folder.svg?raw';
import heart from '../../../../assets/icons/heart.svg?raw';
import home from '../../../../assets/icons/home.svg?raw';
import imageGallery from '../../../../assets/icons/image-gallery.svg?raw';
import image from '../../../../assets/icons/image.svg?raw';
import indexBuilder from '../../../../assets/icons/index-builder.svg?raw';
import layers from '../../../../assets/icons/layers.svg?raw';
import leftArrow from '../../../../assets/icons/left-arrow.svg?raw';
import left from '../../../../assets/icons/left.svg?raw';
import lines from '../../../../assets/icons/lines.svg?raw';
import lock from '../../../../assets/icons/lock.svg?raw';
import mail from '../../../../assets/icons/mail.svg?raw';
import mapPin from '../../../../assets/icons/map-pin.svg?raw';
import map from '../../../../assets/icons/map.svg?raw';
import minus from '../../../../assets/icons/minus.svg?raw';
import more from '../../../../assets/icons/more.svg?raw';
import move from '../../../../assets/icons/move.svg?raw';
import music from '../../../../assets/icons/music.svg?raw';
import openMail from '../../../../assets/icons/open-mail.svg?raw';
import ovalChat from '../../../../assets/icons/oval-chat.svg?raw';
import past from '../../../../assets/icons/past.svg?raw';
import pencil from '../../../../assets/icons/pencil.svg?raw';
import period from '../../../../assets/icons/period.svg?raw';
import phone from '../../../../assets/icons/phone.svg?raw';
import pieChat from '../../../../assets/icons/pie-chat.svg?raw';
import play from '../../../../assets/icons/play.svg?raw';
import rectangle from '../../../../assets/icons/rectangle.svg?raw';
import removeCalendar from '../../../../assets/icons/remove-calendar.svg?raw';
import repeat from '../../../../assets/icons/repeat.svg?raw';
import resize from '../../../../assets/icons/resize.svg?raw';
import rightArrow from '../../../../assets/icons/right-arrow.svg?raw';
import right from '../../../../assets/icons/right.svg?raw';
import search from '../../../../assets/icons/search.svg?raw';
import seoSettings from '../../../../assets/icons/seo-settings.svg?raw';
import settings from '../../../../assets/icons/settings.svg?raw';
import share from '../../../../assets/icons/share.svg?raw';
import shazam from '../../../../assets/icons/shazam.svg?raw';
import siteConfiguration from '../../../../assets/icons/site-configuration.svg?raw';
import star from '../../../../assets/icons/star.svg?raw';
import stop from '../../../../assets/icons/stop.svg?raw';
import textAlignB from '../../../../assets/icons/text-align-b.svg?raw';
import textAlignT from '../../../../assets/icons/text-align-t.svg?raw';
import timeRepeat from '../../../../assets/icons/time-repeat.svg?raw';
import time from '../../../../assets/icons/time.svg?raw';
import trash from '../../../../assets/icons/trash.svg?raw';
import upArrow from '../../../../assets/icons/up-arrow.svg?raw';
import up from '../../../../assets/icons/up.svg?raw';
import upload from '../../../../assets/icons/upload.svg?raw';
import userManagement from '../../../../assets/icons/user-management.svg?raw';
import user from '../../../../assets/icons/user.svg?raw';
import video from '../../../../assets/icons/video.svg?raw';
import volumeManagement from '../../../../assets/icons/volume-management.svg?raw';
import web from '../../../../assets/icons/web.svg?raw';

const icons = {
  add,
  'add-calendar': addCalendar,
  alert: alertIcon,
  'angle-down': angleDown,
  'angle-left': angleLeft,
  'angle-right': angleRight,
  'angle-up': angleUp,
  archive,
  'article-management': articleManagement,
  'author-management': authorManagement,
  bag,
  basket,
  bibliographines,
  box,
  calendar,
  card,
  chart,
  chat,
  'circle-add': circleAdd,
  'circle-delete': circleDelete,
  'circle-down': circleDown,
  'circle-left': circleLeft,
  'circle-remove': circleRemove,
  'circle-right': circleRight,
  'circle-up': circleUp,
  clip,
  cloud,
  'content-management': contentManagement,
  copy,
  cut,
  'delete-calendar': deleteCalendar,
  deletes,
  'dinamic-banner-management': dinamicBannerManagement,
  discount,
  'down-arrow': downArrow,
  down,
  download,
  'empty-calendar': emptyCalendar,
  'empty-file': emptyFile,
  eye,
  file,
  folder,
  heart,
  home,
  'image-gallery': imageGallery,
  image,
  'index-builder': indexBuilder,
  layers,
  'left-arrow': leftArrow,
  left,
  lines,
  lock,
  mail,
  'map-pin': mapPin,
  map,
  minus,
  more,
  move,
  music,
  'open-mail': openMail,
  'oval-chat': ovalChat,
  past,
  pencil,
  period,
  phone,
  'pie-chat': pieChat,
  play,
  rectangle,
  'remove-calendar': removeCalendar,
  repeat,
  resize,
  'right-arrow': rightArrow,
  right,
  search,
  'seo-settings': seoSettings,
  settings,
  share,
  shazam,
  'site-configuration': siteConfiguration,
  star,
  stop,
  'text-align-b': textAlignB,
  'text-align-t': textAlignT,
  'time-repeat': timeRepeat,
  time,
  trash,
  'up-arrow': upArrow,
  up,
  upload,
  'user-management': userManagement,
  user,
  video,
  'volume-management': volumeManagement,
  web,
};

describe('Testing for Icon component', () => {
  Object.entries(icons).forEach(([iconName, src]) => {
    it(`Icon ${iconName} is rendering`, () => {
      render(<Icon src={src} size="24px" data-testid={`icon-${iconName}`} />);
      const iconElement = screen.getByTestId(`icon-${iconName}`);
      expect(iconElement).toBeTruthy();
    });

    it(`Icon ${iconName} applies custom size and styles`, () => {
      render(
        <Icon src={src} size="32px" styles={{ color: 'red' }} data-testid={`icon-${iconName}`} />,
      );

      const iconElement = screen.getByTestId(`icon-${iconName}`);
      expect(iconElement.getAttribute('style')).toContain('width: 32px');
      expect(iconElement.getAttribute('style')).toContain('height: 32px');
      expect(iconElement.getAttribute('style')).toContain('color: red');
    });
  });
});
