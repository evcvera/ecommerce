import {IFormValue} from "../models/interfaces/iFormValue";


class UserInfoService {
    updateMap(formValue: IFormValue) {
        const serializedFormValue = JSON.stringify(formValue);
        localStorage.setItem('formValue', serializedFormValue);
        return;
    }

    getFormValue(): IFormValue | null {
        const serializedFormValue = localStorage.getItem('formValue');
        if (serializedFormValue) {
            return JSON.parse(serializedFormValue) as IFormValue;
        }
        return null;
    }

    removeFormValue() {
        localStorage.removeItem('formValue');
    }
}

const userInfoService = new UserInfoService();
export default userInfoService;
