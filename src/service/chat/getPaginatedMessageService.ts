
type UserDto = {
    id: number 
}

type Pager = {
    size: number,
    page: number
}

const getPaginatedMessageService = (me: UserDto, otherId: number, page: Pager) => {

}