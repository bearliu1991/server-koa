import common from './common';
import mobile from './mobile';
import admin from './admin';
import manage from './manage';
import chat from './chat';

module.exports = {
  ...common,
  ...mobile,
  ...admin,
  ...manage,
  ...chat,
};
