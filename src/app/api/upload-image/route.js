export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');
        const presignedUrl = formData.get('presigned_url');
        
        // Validate required fields
        if (!file || !presignedUrl) {
            return Response.json(
                { success: false, error: 'File and presigned URL are required' },
                { status: 400 }
            );
        }
        
        // Validate file size (10MB limit)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            return Response.json(
                { success: false, error: 'File size exceeds 10MB limit' },
                { status: 400 }
            );
        }
        
        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            return Response.json(
                { success: false, error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed' },
                { status: 400 }
            );
        }
        
        // Upload to S3 using the presigned URL
        const response = await fetch(presignedUrl, {
            method: 'PUT',
            body: file,
            headers: {
                'Content-Type': file.type
            }
        });
        
        if (!response.ok) {
            console.error('S3 upload failed:', response.status, response.statusText);
            return Response.json(
                { success: false, error: 'Failed to upload file to S3' },
                { status: 500 }
            );
        }
        
        return Response.json({ 
            success: true, 
            message: 'File uploaded successfully',
            fileName: file.name,
            fileSize: file.size,
            fileType: file.type
        });
        
    } catch (error) {
        console.error('Upload proxy error:', error);
        return Response.json(
            { success: false, error: 'Internal server error during upload' },
            { status: 500 }
        );
    }
} 