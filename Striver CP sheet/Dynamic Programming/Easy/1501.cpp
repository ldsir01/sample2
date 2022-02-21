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

void solve(vector<long long> &v, ll N)
{
	for (int i = 0; i < N ; i++)
	{
		if (v[i] == 0 || v[i] == 1) continue;
		else
		{
			ll creame_length = v[i];
			ll idx = i;


			while ((creame_length--) && idx >= 0)
			{
				v[idx] = 1;
				idx--;
			}
		}
	}

	for (auto it : v) cout << it << " ";
	cout << endl;
}

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	long long t;
	cin >> t;
	while (t--)
	{
		ll N;
		cin >> N;
		vector<long long> v;

		for (int i = 0 ; i < N ; i++)
		{
			int x;
			cin >> x;
			v.push_back(x);
		}

		solve(v , N);
	}


}


















