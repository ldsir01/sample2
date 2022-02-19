#include <bits/stdc++.h>
#define db1(x) cout<<#x<<"="<<x<<'\n'
#define db2(x,y) cout<<#x<<"="<<x<<","<<#y<<"="<<y<<'\n'
#define db3(x,y,z) cout<<#x<<"="<<x<<","<<#y<<"="<<y<<","<<#z<<"="<<z<<'\n'
#define rep(i,n) for(int i=0;i<(n);++i)
#define repA(i,a,n) for(int i=a;i<=(n);++i)
#define repD(i,a,n) for(int i=a;i>=(n);--i)
using ll = long long;


using namespace std;
using ll = long long;



int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	int t;
	cin >> t;

	std::vector<long long> v;
	while (t--)
	{
		long long x;
		cin >> x;
		v.push_back(x);
	}

	long long start = 0;
	long long end = 0;

	long long maxLength = 1;


	while (end < v.size())
	{
		if (start == end)
		{
			end++;
		}
		else if (v[end] > v[end - 1])
		{
			if (end - start  > maxLength - 1)
			{
				maxLength++;
			}
			end++;
		}
		else if (v[end] < v[end - 1])
		{
			start = end;
			end++;
		}
		else
		{
			start = end;
			end++;
		}
	}


	cout << maxLength;





}


















