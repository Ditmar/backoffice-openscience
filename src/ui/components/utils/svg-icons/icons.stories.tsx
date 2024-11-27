import type { StoryObj, Meta } from '@storybook/react';
import { Icon } from './icons';
import addcalendar from '../../../../assets/icons/add-calendar.svg?raw';
import add from '../../../../assets/icons/add.svg?raw';
import alert from '../../../../assets/icons/alert.svg?raw';
import angledown from '../../../../assets/icons/angle-down.svg?raw';
import angleleft from '../../../../assets/icons/angle-left.svg?raw';
import angleright from '../../../../assets/icons/angle-right.svg?raw';
import angleup from '../../../../assets/icons/angle-up.svg?raw';
import archive from '../../../../assets/icons/archive.svg?raw';
import articlemanagement from '../../../../assets/icons/article-management.svg?raw';
import authormanagement from '../../../../assets/icons/author-management.svg?raw';
import bag from '../../../../assets/icons/bag.svg?raw';
import basket from '../../../../assets/icons/basket.svg?raw';
import bibliographines from '../../../../assets/icons/bibliographines.svg?raw';
import box from '../../../../assets/icons/box.svg?raw';
import calendar from '../../../../assets/icons/calendar.svg?raw';
import card from '../../../../assets/icons/card.svg?raw';
import chart from '../../../../assets/icons/chart.svg?raw';
import chat from '../../../../assets/icons/chat.svg?raw';
import circleadd from '../../../../assets/icons/circle-add.svg?raw';
import circledelete from '../../../../assets/icons/circle-delete.svg?raw';
import circledown from '../../../../assets/icons/circle-down.svg?raw';
import circleleft from '../../../../assets/icons/circle-left.svg?raw';
import circleremove from '../../../../assets/icons/circle-remove.svg?raw';
import circleright from '../../../../assets/icons/circle-right.svg?raw';
import circleup from '../../../../assets/icons/circle-up.svg?raw';
import clip from '../../../../assets/icons/clip.svg?raw';
import cloud from '../../../../assets/icons/cloud.svg?raw';
import contentmanagement from '../../../../assets/icons/content-management.svg?raw';
import copy from '../../../../assets/icons/copy.svg?raw';
import cut from '../../../../assets/icons/cut.svg?raw';
import deletecalendar from '../../../../assets/icons/delete-calendar.svg?raw';
import deletes from '../../../../assets/icons/deletes.svg?raw';
import dinamicbannermanagement from '../../../../assets/icons/dinamic-banner-management.svg?raw';
import discount from '../../../../assets/icons/discount.svg?raw';
import downarrow from '../../../../assets/icons/down-arrow.svg?raw';
import down from '../../../../assets/icons/down.svg?raw';
import download from '../../../../assets/icons/download.svg?raw';
import emptycalendar from '../../../../assets/icons/empty-calendar.svg?raw';
import emptyfile from '../../../../assets/icons/empty-file.svg?raw';
import eye from '../../../../assets/icons/eye.svg?raw';
import file from '../../../../assets/icons/file.svg?raw';
import folder from '../../../../assets/icons/folder.svg?raw';
import heart from '../../../../assets/icons/heart.svg?raw';
import home from '../../../../assets/icons/home.svg?raw';
import imagegallery from '../../../../assets/icons/image-gallery.svg?raw';
import image from '../../../../assets/icons/image.svg?raw';
import indexbuilder from '../../../../assets/icons/index-builder.svg?raw';
import layers from '../../../../assets/icons/layers.svg?raw';
import leftarrow from '../../../../assets/icons/left-arrow.svg?raw';
import left from '../../../../assets/icons/left.svg?raw';
import lines from '../../../../assets/icons/lines.svg?raw';
import lock from '../../../../assets/icons/lock.svg?raw';
import mail from '../../../../assets/icons/mail.svg?raw';
import mappin from '../../../../assets/icons/map-pin.svg?raw';
import map from '../../../../assets/icons/map.svg?raw';
import minus from '../../../../assets/icons/minus.svg?raw';
import more from '../../../../assets/icons/more.svg?raw';
import move from '../../../../assets/icons/move.svg?raw';
import music from '../../../../assets/icons/music.svg?raw';
import openmail from '../../../../assets/icons/open-mail.svg?raw';
import ovalchat from '../../../../assets/icons/oval-chat.svg?raw';
import past from '../../../../assets/icons/past.svg?raw';
import pencil from '../../../../assets/icons/pencil.svg?raw';
import period from '../../../../assets/icons/period.svg?raw';
import phone from '../../../../assets/icons/phone.svg?raw';
import piechat from '../../../../assets/icons/pie-chat.svg?raw';
import play from '../../../../assets/icons/play.svg?raw';
import rectangle from '../../../../assets/icons/rectangle.svg?raw';
import removecalendar from '../../../../assets/icons/remove-calendar.svg?raw';
import repeat from '../../../../assets/icons/repeat.svg?raw';
import resize from '../../../../assets/icons/resize.svg?raw';
import rightarrow from '../../../../assets/icons/right-arrow.svg?raw';
import right from '../../../../assets/icons/right.svg?raw';
import search from '../../../../assets/icons/search.svg?raw';
import seosettings from '../../../../assets/icons/seo-settings.svg?raw';
import settings from '../../../../assets/icons/settings.svg?raw';
import share from '../../../../assets/icons/share.svg?raw';
import shazam from '../../../../assets/icons/shazam.svg?raw';
import siteconfiguration from '../../../../assets/icons/site-configuration.svg?raw';
import star from '../../../../assets/icons/star.svg?raw';
import stop from '../../../../assets/icons/stop.svg?raw';
import textalignb from '../../../../assets/icons/text-align-b.svg?raw';
import textalignt from '../../../../assets/icons/text-align-t.svg?raw';
import timerepeat from '../../../../assets/icons/time-repeat.svg?raw';
import time from '../../../../assets/icons/time.svg?raw';
import trash from '../../../../assets/icons/trash.svg?raw';
import uparrow from '../../../../assets/icons/up-arrow.svg?raw';
import up from '../../../../assets/icons/up.svg?raw';
import upload from '../../../../assets/icons/upload.svg?raw';
import usermanagement from '../../../../assets/icons/user-management.svg?raw';
import user from '../../../../assets/icons/user.svg?raw';
import video from '../../../../assets/icons/video.svg?raw';
import volumemanagement from '../../../../assets/icons/volume-management.svg?raw';
import web from '../../../../assets/icons/web.svg?raw';

const meta = {
  title: 'ui/components/icon/svg-icons',
  component: Icon,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AddCalendar: Story = {
  args: {
    src: addcalendar,
    size: '24px',
    className: 'add-calendar-icon',
    'data-testid': 'add-calendar-icon',
  },
};

export const Add: Story = {
  args: { src: add, size: '24px', className: 'add-icon', 'data-testid': 'add-icon' },
};

export const Alert: Story = {
  args: { src: alert, size: '24px', className: 'alert-icon', 'data-testid': 'alert-icon' },
};

export const AngleDown: Story = {
  args: {
    src: angledown,
    size: '24px',
    className: 'angle-down-icon',
    'data-testid': 'angle-down-icon',
  },
};

export const AngleLeft: Story = {
  args: {
    src: angleleft,
    size: '24px',
    className: 'angle-left-icon',
    'data-testid': 'angle-left-icon',
  },
};

export const AngleRight: Story = {
  args: {
    src: angleright,
    size: '24px',
    className: 'angle-right-icon',
    'data-testid': 'angle-right-icon',
  },
};

export const AngleUp: Story = {
  args: { src: angleup, size: '24px', className: 'angle-up-icon', 'data-testid': 'angle-up-icon' },
};

export const Archive: Story = {
  args: { src: archive, size: '24px', className: 'archive-icon', 'data-testid': 'archive-up-icon' },
};

export const ArticleManagement: Story = {
  args: {
    src: articlemanagement,
    size: '24px',
    className: 'article-management-icon',
    'data-testid': 'article-management-icon',
  },
};

export const AuthorManagement: Story = {
  args: {
    src: authormanagement,
    size: '24px',
    className: 'author-management-icon',
    'data-testid': 'author-management-icon',
  },
};

export const Bag: Story = {
  args: { src: bag, size: '24px', className: 'bag-icon', 'data-testid': 'bag-icon' },
};

export const Basket: Story = {
  args: { src: basket, size: '24px', className: 'basket-icon', 'data-testid': 'basket-icon' },
};

export const Bibliographines: Story = {
  args: {
    src: bibliographines,
    size: '24px',
    className: 'bibliographines-icon',
    'data-testid': 'bibliographines-icon',
  },
};

export const Box: Story = {
  args: { src: box, size: '24px', className: 'box-icon', 'data-testid': 'box-icon' },
};

export const Calendar: Story = {
  args: { src: calendar, size: '24px', className: 'calendar-icon', 'data-testid': 'calendar-icon' },
};

export const Card: Story = {
  args: { src: card, size: '24px', className: 'card-icon', 'data-testid': 'card-icon' },
};

export const Chart: Story = {
  args: { src: chart, size: '24px', className: 'chart-icon', 'data-testid': 'chart-icon' },
};

export const Chat: Story = {
  args: { src: chat, size: '24px', className: 'chat-icon', 'data-testid': 'chat-icon' },
};

export const CircleAdd: Story = {
  args: {
    src: circleadd,
    size: '24px',
    className: 'circle-add-icon',
    'data-testid': 'circle-add-icon',
  },
};

export const CircleDelete: Story = {
  args: {
    src: circledelete,
    size: '24px',
    className: 'circle-delete-icon',
    'data-testid': 'circle-delete-icon',
  },
};

export const CircleDown: Story = {
  args: {
    src: circledown,
    size: '24px',
    className: 'circle-down-icon',
    'data-testid': 'circle-down-icon',
  },
};

export const CircleLeft: Story = {
  args: {
    src: circleleft,
    size: '24px',
    className: 'circle-left-icon',
    'data-testid': 'circle-left-icon',
  },
};

export const CircleRemove: Story = {
  args: {
    src: circleremove,
    size: '24px',
    className: 'circle-remove-icon',
    'data-testid': 'circle-remove-icon',
  },
};

export const CircleRight: Story = {
  args: {
    src: circleright,
    size: '24px',
    className: 'circle-right-icon',
    'data-testid': 'circle-right-icon',
  },
};

export const CircleUp: Story = {
  args: {
    src: circleup,
    size: '24px',
    className: 'circle-up-icon',
    'data-testid': 'circle-up-icon',
  },
};

export const Clip: Story = {
  args: { src: clip, size: '24px', className: 'clip-icon', 'data-testid': 'clip-icon' },
};

export const Cloud: Story = {
  args: { src: cloud, size: '24px', className: 'cloud-icon', 'data-testid': 'cloud-icon' },
};

export const ContentManagement: Story = {
  args: {
    src: contentmanagement,
    size: '24px',
    className: 'content-management-icon',
    'data-testid': 'content-management-icon',
  },
};

export const Copy: Story = {
  args: { src: copy, size: '24px', className: 'copy-icon', 'data-testid': 'copy-icon' },
};

export const Cut: Story = {
  args: { src: cut, size: '24px', className: 'cut-icon', 'data-testid': 'cut-icon' },
};

export const DeleteCalendar: Story = {
  args: {
    src: deletecalendar,
    size: '24px',
    className: 'delete-calendar-icon',
    'data-testid': 'delete-calendar-icon',
  },
};

export const Deletes: Story = {
  args: { src: deletes, size: '24px', className: 'deletes-icon', 'data-testid': 'deletes-icon' },
};

export const DinamicBannerManagement: Story = {
  args: {
    src: dinamicbannermanagement,
    size: '24px',
    className: 'dinamic-banner-management-icon',
    'data-testid': 'dinamic-banner-management-icon',
  },
};

export const Discount: Story = {
  args: { src: discount, size: '24px', className: 'discount-icon', 'data-testid': 'discount-icon' },
};

export const DownArrow: Story = {
  args: {
    src: downarrow,
    size: '24px',
    className: 'down-arrow-icon',
    'data-testid': 'down-arrow-icon',
  },
};

export const Down: Story = {
  args: { src: down, size: '24px', className: 'down-icon', 'data-testid': 'down-icon' },
};

export const Download: Story = {
  args: { src: download, size: '24px', className: 'download-icon', 'data-testid': 'download-icon' },
};

export const EmptyCalendar: Story = {
  args: {
    src: emptycalendar,
    size: '24px',
    className: 'empty-calendar-icon',
    'data-testid': 'empty-calendar-icon',
  },
};

export const EmptyFile: Story = {
  args: {
    src: emptyfile,
    size: '24px',
    className: 'empty-file-icon',
    'data-testid': 'empty-file-icon',
  },
};

export const Eye: Story = {
  args: { src: eye, size: '24px', className: 'eye-icon', 'data-testid': 'eye-icon' },
};

export const File: Story = {
  args: { src: file, size: '24px', className: 'file-icon', 'data-testid': 'file-icon' },
};

export const Folder: Story = {
  args: { src: folder, size: '24px', className: 'folder-icon', 'data-testid': 'folder-icon' },
};

export const Heart: Story = {
  args: { src: heart, size: '24px', className: 'heart-icon', 'data-testid': 'heart-icon' },
};

export const Home: Story = {
  args: { src: home, size: '24px', className: 'home-icon', 'data-testid': 'home-icon' },
};

export const ImageGallery: Story = {
  args: {
    src: imagegallery,
    size: '24px',
    className: 'image-gallery-icon',
    'data-testid': 'image-gallery-icon',
  },
};

export const Image: Story = {
  args: { src: image, size: '24px', className: 'image-icon', 'data-testid': 'image-icon' },
};

export const IndexBuilder: Story = {
  args: {
    src: indexbuilder,
    size: '24px',
    className: 'index-builder-icon',
    'data-testid': 'index-builder-icon',
  },
};

export const Layers: Story = {
  args: { src: layers, size: '24px', className: 'layers-icon', 'data-testid': 'layers-icon' },
};

export const LeftArrow: Story = {
  args: {
    src: leftarrow,
    size: '24px',
    className: 'left-arrow-icon',
    'data-testid': 'left-arrow-icon',
  },
};

export const Left: Story = {
  args: { src: left, size: '24px', className: 'left-icon', 'data-testid': 'left-icon' },
};

export const Lines: Story = {
  args: { src: lines, size: '24px', className: 'lines-icon', 'data-testid': 'lines-icon' },
};

export const Lock: Story = {
  args: { src: lock, size: '24px', className: 'lock-icon', 'data-testid': 'lock-icon' },
};

export const Mail: Story = {
  args: { src: mail, size: '24px', className: 'mail-icon', 'data-testid': 'mail-icon' },
};

export const MapPin: Story = {
  args: { src: mappin, size: '24px', className: 'map-pin-icon', 'data-testid': 'map-pin-icon' },
};

export const Map: Story = {
  args: { src: map, size: '24px', className: 'map-icon', 'data-testid': 'map-icon' },
};

export const Minus: Story = {
  args: { src: minus, size: '24px', className: 'minus-icon', 'data-testid': 'minus-icon' },
};

export const More: Story = {
  args: { src: more, size: '24px', className: 'more-icon', 'data-testid': 'more-icon' },
};

export const Move: Story = {
  args: { src: move, size: '24px', className: 'move-icon', 'data-testid': 'move-icon' },
};

export const Music: Story = {
  args: { src: music, size: '24px', className: 'music-icon', 'data-testid': 'music-icon' },
};

export const OpenMail: Story = {
  args: {
    src: openmail,
    size: '24px',
    className: 'open-mail-icon',
    'data-testid': 'open-mail-icon',
  },
};

export const OvalChat: Story = {
  args: {
    src: ovalchat,
    size: '24px',
    className: 'oval-chat-icon',
    'data-testid': 'oval-chat-icon',
  },
};

export const Past: Story = {
  args: { src: past, size: '24px', className: 'past-icon', 'data-testid': 'past-icon' },
};

export const Pencil: Story = {
  args: { src: pencil, size: '24px', className: 'pencil-icon', 'data-testid': 'pencil-icon' },
};

export const Period: Story = {
  args: { src: period, size: '24px', className: 'period-icon', 'data-testid': 'period-icon' },
};

export const Phone: Story = {
  args: { src: phone, size: '24px', className: 'phone-icon', 'data-testid': 'phone-icon' },
};

export const PieChat: Story = {
  args: { src: piechat, size: '24px', className: 'pie-chat-icon', 'data-testid': 'pie-chat-icon' },
};

export const Play: Story = {
  args: { src: play, size: '24px', className: 'play-icon', 'data-testid': 'play-icon' },
};

export const Rectangle: Story = {
  args: {
    src: rectangle,
    size: '24px',
    className: 'rectangle-icon',
    'data-testid': 'rectangle-icon',
  },
};

export const RemoveCalendar: Story = {
  args: {
    src: removecalendar,
    size: '24px',
    className: 'remove-calendar-icon',
    'data-testid': 'remove-calendar-icon',
  },
};

export const Repeat: Story = {
  args: { src: repeat, size: '24px', className: 'repeat-icon', 'data-testid': 'repeat-icon' },
};

export const Resize: Story = {
  args: { src: resize, size: '24px', className: 'resize-icon', 'data-testid': 'resize-icon' },
};

export const RightArrow: Story = {
  args: {
    src: rightarrow,
    size: '24px',
    className: 'right-arrow-icon',
    'data-testid': 'right-arrow-icon',
  },
};

export const Right: Story = {
  args: { src: right, size: '24px', className: 'right-icon', 'data-testid': 'right-icon' },
};

export const Search: Story = {
  args: { src: search, size: '24px', className: 'search-icon', 'data-testid': 'search-icon' },
};

export const SeoSettings: Story = {
  args: {
    src: seosettings,
    size: '24px',
    className: 'seo-settings-icon',
    'data-testid': 'seo-settings-icon',
  },
};

export const Settings: Story = {
  args: { src: settings, size: '24px', className: 'settings-icon', 'data-testid': 'settings-icon' },
};

export const Share: Story = {
  args: { src: share, size: '24px', className: 'share-icon', 'data-testid': 'share-icon' },
};

export const Shazam: Story = {
  args: { src: shazam, size: '24px', className: 'shazam-icon', 'data-testid': 'shazam-icon' },
};

export const SiteConfiguration: Story = {
  args: {
    src: siteconfiguration,
    size: '24px',
    className: 'site-configuration-icon',
    'data-testid': 'site-configuration-icon',
  },
};

export const Star: Story = {
  args: { src: star, size: '24px', className: 'star-icon', 'data-testid': 'star-icon' },
};

export const Stop: Story = {
  args: { src: stop, size: '24px', className: 'stop-icon', 'data-testid': 'stop-icon' },
};

export const TextAlignB: Story = {
  args: {
    src: textalignb,
    size: '24px',
    className: 'text-align-b-icon',
    'data-testid': 'text-align-b-icon',
  },
};

export const TextAlignT: Story = {
  args: {
    src: textalignt,
    size: '24px',
    className: 'text-align-t-icon',
    'data-testid': 'text-align-t-icon',
  },
};

export const TimeRepeat: Story = {
  args: {
    src: timerepeat,
    size: '24px',
    className: 'time-repeat-icon',
    'data-testid': 'time-repeat-icon',
  },
};

export const Time: Story = {
  args: { src: time, size: '24px', className: 'time-icon', 'data-testid': 'time-icon' },
};

export const Trash: Story = {
  args: { src: trash, size: '24px', className: 'trash-icon', 'data-testid': 'trash-icon' },
};

export const UpArrow: Story = {
  args: { src: uparrow, size: '24px', className: 'up-arrow-icon', 'data-testid': 'up-arrow-icon' },
};

export const Up: Story = {
  args: { src: up, size: '24px', className: 'up-icon', 'data-testid': 'up-icon' },
};

export const Upload: Story = {
  args: { src: upload, size: '24px', className: 'upload-icon', 'data-testid': 'upload-icon' },
};

export const UserMangement: Story = {
  args: {
    src: usermanagement,
    size: '24px',
    className: 'user-management-icon',
    'data-testid': 'user-management-icon',
  },
};

export const User: Story = {
  args: { src: user, size: '24px', className: 'user-icon', 'data-testid': 'user-icon' },
};

export const Video: Story = {
  args: { src: video, size: '24px', className: 'video-icon', 'data-testid': 'video-icon' },
};

export const VolumeManagement: Story = {
  args: {
    src: volumemanagement,
    size: '24px',
    className: 'volume-management-icon',
    'data-testid': 'volume-management-icon',
  },
};

export const Web: Story = {
  args: { src: web, size: '24px', className: 'web-icon', 'data-testid': 'web-icon' },
};
