import { configFTP } from '../config/ftp.js';
import FtpConnection from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
  configFTP.log = util.log;
  const connect = FtpConnection.create(configFTP);
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FTP",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(connect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
}