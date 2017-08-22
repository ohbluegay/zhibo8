/**
 * Created by cl on 2017/6/6.
 */
import {Toast} from 'mint-ui';
export const toast= (msg) => {
  Toast({
    message: msg,
    position: 'middle',
    duration: 2000
  });
}
