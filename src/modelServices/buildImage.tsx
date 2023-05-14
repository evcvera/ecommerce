
class BuildImageService {
    HD(image: string): string {
        return image.replace('-I.jpg', '-O.webp')
            .replace('http:', 'https:')
            .replace('D_', 'D_NQ_NP_');
    }
}

const buildImageService = new BuildImageService();
export default buildImageService;
