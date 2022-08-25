<?php

namespace App\Http\Api\V1\Controllers\User;

use App\Http\Api\V1\Controllers\BaseController;
use App\Http\Repositories\UserRepository;
use App\Http\Resources\Schemas\UserResponse;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class QueryController extends BaseController
{
    /**
     * @param UserRepository $userRepository
     *
     * @return JsonResponse
     *
     * @OA\Get (
     *
     *      path="/v1/user",
     *      operationId="userList",
     *      summary="List of users",
     *      tags={"Users"},
     *
     *	    @OA\Response(
     *          response=200,
     *          description="",
     *          @OA\JsonContent(
     *              ref="#/components/schemas/UserResponse"
     *          )
     *      )
     * )
     */
    public function handle(UserRepository $userRepository)
    {
        return $this->handleData($userRepository, User::class, UserResponse::class);
    }
}
