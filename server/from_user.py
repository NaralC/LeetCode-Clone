import sys
def isPalindrome(string):
  return string == string[::-1]
if __name__ == '__main__':
    string = sys.argv[1]
    result = bool(sys.argv[-1])
    print(isPalindrome(string) == result)