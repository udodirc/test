<?php

namespace App\Http\Api;

/**
 * @OA\Info(
 *     version="1.0.0",
 *     title="NEWS API",
 *     @OA\Contact(
 *         email=""
 *     ),
 * )
 *
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer"
 * ),
 *
 * @OA\Tag(
 *     name="News",
 *     description="News"
 * )
 * @OA\Tag(
 *     name="Comments",
 *     description="Comments"
 * )
 *
 * @OA\Server(
 *     description="Base server for development",
 *     url="http://0.0.0.0:8000/api"
 * )
 *
 */
class Meta
{
    // It's fake class
}
