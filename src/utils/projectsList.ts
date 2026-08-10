import type { Project } from "../types/projects";

export const projects: Project[] = [
    {
        id: 'project-1',
        slug: 'office-room-1',
        titleRu: 'Помещение 1',
        titleUs: 'Room 1',
        descriptionRu: 'Офис',
        descriptionUs: 'Office',
        previewUrl: '/projects/project-1/preview.jpg',
        arrayImgUrls: ['/projects/project-1/project-1.1.jpg']
    },
    {
        id: 'project-2',
        slug: 'office-room-2',
        titleRu: 'Помещение 2',
        titleUs: 'Room 2',
        descriptionRu: 'Офис',
        descriptionUs: 'Office',
        previewUrl: '/projects/project-2/preview.jpg',
        arrayImgUrls: ['/projects/project-2/project-2.1.jpg']
    },
];