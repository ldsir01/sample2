#include <bits/stdc++.h>
#define db1(x) cout<<#x<<"="<<x<<'\n'
#define db2(x,y) cout<<#x<<"="<<x<<","<<#y<<"="<<y<<'\n'
#define db3(x,y,z) cout<<#x<<"="<<x<<","<<#y<<"="<<y<<","<<#z<<"="<<z<<'\n'
#define rep(i,n) for(long long i=0;i<(n);++i)
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

	long long t;
	cin >> t;

	long long save = t;


	std::vector<long long> v;



	while (t > 0)
	{
		v.push_back(t % 10);
		t = t / 10;
	}

	// for (auto it : v) cout << it << " ";

	long long size = v.size();

	long long count = 0;
	for (long long i = 0 ; i < size ; i++)
	{
		if (v[i] == 9)count++;
	}
	if (count == size)
	{
		cout << save - (save / 10);
	}
	else
	{
		long long start = 0;
		start = 0;
		long long count_nine = 0;
		while (v[start] == 9)
		{
			v.erase(v.begin()  + start);
			count_nine++;
		}


		count_nine = pow(10, count_nine);


		reverse(v.begin(), v.end());


		vector<long long > v_copy = v;


		rep(i, v.size())
		{
			if (v[i] == 9 && i == 0)
			{
				v[i] = 9;
				count--;
			}
			else if (v[i] > 4)
			{
				v[i] = 9 - v[i];
			}
		}

		long long ans = 0;
		long long size = v.size();
		long long i = 1;

		while (size--)
		{
			ans = ans + (i * v[size]);
			i = i * 10;
		}

		ans = ans * count_nine;

		cout << ans;
	}




}


















