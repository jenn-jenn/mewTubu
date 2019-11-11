export const allClips = ( {entities: {videos} } ) => {
    return Object.values(videos).map(id => videos[id]);
};

