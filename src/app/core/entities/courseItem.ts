import { ICourseItem } from '../abstraction/ICurseItem';

export  class CourseItem implements ICourseItem {
	public id: number;
    public title: string;
    public description: string;
    public duration: number;
    public date: Date;
	public topRated: boolean;

	constructor(id: number, title: string, duration: number, date: Date, description: string, isTop?: boolean) {
		this.id = id;
		this.title = title;
		this.duration = duration;
		this.date = date;
		this.description = description;
		this.topRated = isTop == null ? false : isTop;
	} 
}
