"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2 } from "lucide-react"

// This is a client-side only component for managing images
// In a real application, you would connect this to your backend storage

export default function ImageUploader() {
    const [images, setImages] = useState<{ id: number; file: File; preview: string }[]>([])
    const [nextId, setNextId] = useState(1)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const newImages = Array.from(e.target.files).map((file) => ({
                id: nextId + images.length,
                file,
                preview: URL.createObjectURL(file),
            }))

            setImages([...images, ...newImages])
            setNextId(nextId + newImages.length)
        }
    }

    const removeImage = (id: number) => {
        setImages(images.filter((image) => image.id !== id))
    }

    return (
        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle>Upload Growth Images</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="image-upload">Upload Images</Label>
                        <Input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            className="cursor-pointer"
                        />
                    </div>

                    {images.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                            {images.map((image) => (
                                <div key={image.id} className="relative group">
                                    <img
                                        src={image.preview || "/placeholder.svg"}
                                        alt={`Uploaded ${image.id}`}
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={() => removeImage(image.id)}
                                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-blue hover:bg-blue/90" disabled={images.length === 0}>
                    Save Images
                </Button>
            </CardFooter>
        </Card>
    )
}
