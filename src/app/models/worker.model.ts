class WorkerModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public title: string;
    public country: string;
    public city: string;
    public birthDate: string;
    public imageName: string;
    public images: FileList;

    public static convertToFormData(worker: WorkerModel): FormData {
        const myFormData = new FormData();
        myFormData.append("firstName", worker.firstName);
        myFormData.append("lastName", worker.lastName);
        myFormData.append("title", worker.title);
        myFormData.append("country", worker.country);
        myFormData.append("city", worker.city);
        myFormData.append("birthDate", worker.birthDate);
        if(worker.images) myFormData.append("image", worker.images.item(0));
        return myFormData;
    }
}

export default WorkerModel;
