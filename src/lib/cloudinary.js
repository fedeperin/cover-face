export const cloudName = 'df9zymkaf'
export const apiKey = '846577746122957'
export const preset = 'ml_default'
export const cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${ cloudName }/image/upload`
export const downloadFilename = 'cover-face-download'

export let faceCoverData = [
    {
        url: imageId => `https://res.cloudinary.com/${ cloudName }/image/upload/c_thumb,g_faces,e_blur_faces,fl_attachment:${ downloadFilename }/${ imageId }`,
        name: 'blur',
        displayName: 'Blur',
        beta: false
    },
    {
        url: imageId => `https://res.cloudinary.com/${ cloudName }/image/upload/c_thumb,g_faces,e_pixelate_faces,fl_attachment:${ downloadFilename }/${ imageId }`,
        name: 'pixelate',
        displayName: 'Pixelate',
        beta: false
    },
    {
        url: imageId => `https://res.cloudinary.com/${ cloudName }/image/upload/l_duztwbxtbo9nt4deywdt/fl_layer_apply,w_1.3,fl_region_relative,g_faces,fl_attachment:${ downloadFilename }/b_rgb:ff000000,e_trim:5/${ imageId }`,
        name: 'coveredEyes',
        displayName: 'Covered Eyes',
        beta: true
    },
    {
        url: imageId => `https://res.cloudinary.com/${ cloudName }/image/upload/l_vqflhfrarcvzixeeltqe/fl_layer_apply,w_1.3,fl_region_relative,g_faces,fl_attachment:${ downloadFilename }/b_rgb:ff000000,e_trim:5/${ imageId }`,
        name: 'coolGlasses',
        displayName: 'Cool Glasses',
        beta: true
    },
    {
        url: imageId => `https://res.cloudinary.com/${ cloudName }/image/upload/l_heeaozxhxatgsbqavqp8/fl_layer_apply,w_1.3,fl_region_relative,g_faces,fl_attachment:${ downloadFilename }/b_rgb:ff000000,e_trim:5/${ imageId }`,
        name: 'smilingEmoji',
        displayName: 'Smiling Emoji',
        beta: true
    },
    {
        url: imageId => `https://res.cloudinary.com/${ cloudName }/image/upload/l_awshktdvz4iv2mwaaryf/fl_layer_apply,w_1.3,fl_region_relative,g_faces,fl_attachment:${ downloadFilename }/b_rgb:ff000000,e_trim:5/${ imageId }`,
        name: 'smallHat',
        displayName: 'Small Hat',
        beta: true
    },
    {
        url: imageId => `https://res.cloudinary.com/${ cloudName }/image/upload/l_gcepp8vnohh7pqok0yrh/fl_layer_apply,w_1.3,fl_region_relative,g_faces,fl_attachment:${ downloadFilename }/b_rgb:ff000000,e_trim:5/${ imageId }`,
        name: 'coolEmoji',
        displayName: 'Cool Emoji',
        beta: true
    },
    {
        url: imageId => `https://res.cloudinary.com/${ cloudName }/image/upload/l_v5uwzptkixgjbo93sjdv/fl_layer_apply,w_1.3,fl_region_relative,g_faces,fl_attachment:${ downloadFilename }/b_rgb:ff000000,e_trim:5/${ imageId }`,
        name: 'clownSmile',
        displayName: 'Clown Smile',
        beta: true
    }
]