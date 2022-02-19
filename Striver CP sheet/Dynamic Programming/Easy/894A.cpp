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


int solve(vector<int> q , vector<int> a)
{
	int ans = 0;
	for (int i = 0 ; i < a.size() ; i++)
	{
		int count1 = 0;

		for (int j = 0 ; j < q.size() ; j++)
		{
			if (a[i] > q[j])	count1++;
		}

		ans = ans + (q.size() - count1) * count1;
	}

	return ans;
}


int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	string s;
	cin >> s;

	vector<int> q_idx;
	vector<int> a_idx;

	rep(i, s.length())
	{
		if (s[i] == 'Q')
		{
			q_idx.push_back(i);
		}

		if (s[i] == 'A')
		{
			a_idx.push_back(i);
		}
	}

	cout << solve(q_idx, a_idx) << endl;


}


















