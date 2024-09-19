function solution(my_string, index_list) {
    return index_list.reduce((result, index) => result + my_string[index], '')
}
