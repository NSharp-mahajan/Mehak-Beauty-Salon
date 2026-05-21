import { createFirestoreService } from './firestoreServiceFactory';
const baseService = createFirestoreService('servicesPageContent');

const servicesPageContentService = {
  getContent: () => baseService.getById('main'),
  updateContent: (data) => {
    // If it doesn't exist yet, we create it with id 'main'
    return baseService.create({ id: 'main', ...data });
  }
};

export default servicesPageContentService;
