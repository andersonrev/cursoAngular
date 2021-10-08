export interface FileUpload {
    name: string;
    data: any;
    enconding: string;
    tempFilePath: string;
    truncated: boolean;
    mimetype: string;

    // para que no de error
    mv: Function;
}