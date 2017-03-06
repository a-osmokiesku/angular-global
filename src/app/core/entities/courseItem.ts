import { ICourseItem } from '../abstraction/ICurseItem';

export  class CourseItem implements ICourseItem {
    public title: string;
    public description: string;
    public duration: number;
    public startDate: Date;

	constructor(title: string, duration: number, startDate: Date, description: string) {
		this.title = title;
		this.duration = duration;
		this.startDate = startDate;
		this.description = description;
	}
}
