interface ConfigServiceInterface {
  init(gnbId: string): void;
  config: ConfigService.Config;
}

declare namespace ConfigService {
  interface Config {
    doc: DocumentConfig;
    firebase: FirebaseConfig;
    img: ImageConfig;
  }

  interface DocumentConfig {
    title: string;
  }

  interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  }

  interface ImageConfig {
    namespace: string;
    endpoint: string;
    totalImgs: number;
    bgImgsShouldBePicked: number;
    fmImgsShouldBePicked: number;
  }
}
