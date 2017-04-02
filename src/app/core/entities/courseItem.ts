import { ICourseItem } from '../abstraction/ICurseItem';

export  class CourseItem implements ICourseItem {
	public id: number;
    public title: string;
    public description: string;
    public duration: number;
    public creatingDate: Date;
	public topRated: boolean;

	constructor(title: string, duration: number, creatingDate: Date, description: string, isTop?: boolean) {
		this.id = this.getRandomInt(0, 2147483647)
		this.title = title;
		this.duration = duration;
		this.creatingDate = creatingDate;
		this.description = description;
		this.topRated = isTop == null ? false : isTop;
	}

	private getRandomInt(min: number, max: number): number {
        return (Math.random() * (max - min + 1) | 0) + min;
    }   
}
