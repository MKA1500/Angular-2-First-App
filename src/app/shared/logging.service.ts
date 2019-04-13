export class LoggingService {
  logStatusChange(status: string) {
    console.log('SERVICE: a server status changed, new status: ' + status);
  }
}
