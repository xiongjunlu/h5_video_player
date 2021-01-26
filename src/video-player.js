/*
js手动创建元素，并设置样式
为控件注册事件，并处理兼容性问题
*/

(function (global) {
	'use strict';

	// 播放器控件图片
	const imageBase64 = {
		play_big: "data:image/png;base64,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",
		play: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAABCtJREFUeAHt3LtrFFEUx/FdESuf+BdYWYhGjYWCmELwD7ALEnxiYSz9FywUJPh+FDa+QOK/oCiK2KioCBYaRDDR2IkomLj+DpgiZNadmb3nZu/d78BBnJ17Zu7nHOau6+40GmwIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIZC3QarV2KO4pphQ/Fe8UVxUbsp44k5svoIIvU5xWzCqKNtt/RbF2/kj+lqWACn2qqAsK9n3TviOKZpYQTKrRUHG3K9rdGfRS4fZMewfxy1BAhR0vLHnnndZElxRrMmTp3ympoJOda//fI6b16iEFy0gObaRCVl0u2nXHU72wJQeTvp5Du+rW3G/NdUGxuq9RU558zcJ3GvZVBxxQsIyk1hydKtvl6080fiA1k76+3i4LXmb4jA46q1jV19CpTL5MRQMdYx+Hj6TiEuI6k1wvrdghJl8hx2Mde6zZbL6uMCbJQ5ckedXxL3qnTvlcfTimWBn/9PHOyB2iuvWUhpzQ3eJW9aG9P4KGqF+jhxp6XI3xpn6K3hvJklG/JkMa+kJLyBnFivppemskd4gw9fisNLaM3AmTbvGy0BBh7R8o3bAa40vYtPGy0RDhrd8r5R41xYfwqf0z0hA+xhNKu15N8dsnvV9W3lT62K5T2mGf1L5ZaQg/31G/1H6ZWTL8bH9oyVjul94nM3cIH9dks9IQfqV765faLzMN4Wc77pfaLzPvIXxs7Z+dA3oP8d0nvV9W7hDhbaeVcm+KzWAUNETYhrivdINqhpdh08bLRkOEsZ5Umn1qhN2KT2FSLk4WGqI79xkNH1PYx9S3u0vVG6OX9sZlJHkVj3TVo2oEviCTZPnCXbR9hW5EjTCUWzMYEUtG+UaZ1aHnFLY83Cw/LK0jWTLK1cu+hm/Lw6tyh3NUVAF9hzHWZj/U2R91cpysukCEbrCf8p1X8FO+6uWJP8K5IezHvpvjz4oz1hZwagh7HMBBRZL/v1MbM4eBgRvCHhhyUcEDQ1JtDhXP1vgQmz1SaGuqDlz3PwEVcaLLbrCHjh1WsDzk0FUq5N2aDWHLw2UFjyXMoRHm5qCC7qrREPbg0m1zOfgzMwEV92TJprBHGx9V8DF9Zj2wYDoqsj1O8I+iaLP91xQ8/HyBXMY7VPCNihsKe7rtL8VHxXXFpoynzdQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQWCSBv00mRsLBh8+/AAAAAElFTkSuQmCC",
		pause: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAAllJREFUeAHt3EFqAkEUBFDNwrN7jhzOHMP0gKuAzjRMqWXegAScpvrzfmXr4eAhQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAfxW4Xq+n8TmPz2V87j3Lu+XMaS+nJeuW+dR795r/Y3NuSxl/Nj3nvSDGbUvBtj673bvX/B+bMzby6D/078Iue0G86t695t+Sc9xy6N3OLBufmek4npnz986+6t578yS+/0qEyuwVUIje3UUmV4gIa2+oQvTuLjK5QkRYe0MVond3kckVIsLaG6oQvbuLTK4QEdbeUIXo3V1kcoWIsPaGKkTv7iKTK0SEtTdUIXp3F5lcISKsvaEK0bu7yOQKEWHtDVWI3t1FJleICGtvqEL07i4yuUJEWHtDFaJ3d5HJFSLC2huqEL27i0yuEBHW3lCF6N1dZHKFiLD2hipE7+4ikytEhLU3VCF6dxeZXCEirL2hCtG7u8jkChFh7Q1ViN7dRSZXiAhrb2hrIX4myGfOrsXOZM2cXbv3ae9bC/E9ITRzdi12Jmvm7Nq93j8SGL8G95IfEH3VvY8svCNAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMBbCvwCXh5+d6+XkXUAAAAASUVORK5CYII=",
		progress_dur: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAAAGCAYAAADkKhWtAAAAAXNSR0IArs4c6QAAAKFJREFUaAXt2jEKwzAMBVCnZOxdcoBOHXJuTz2A79LdlaBkygEU8gQCk+nzvAhHy5xzba29o7foZ7QiQIAAAQIECFQS+EaYEd2XGFz2OLwqpZOFAAECBAgQIHAi8HnEx3xpUQQIECBAgACB6gJbDi6KAAECBAgQIHAJgRxc8p+RIkCAAAECBAhUFxi5mNv/KS3nVr8u+QgQIECAwD0FjuXcH8uMD87Oyv1gAAAAAElFTkSuQmCC",
		progress_cur: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAGCAYAAAAmCXvxAAAAAXNSR0IArs4c6QAAAGVJREFUSA1j/P//PxsDA0MTEMcBsSQQj4LBFwLPgU5aBMR1jMAI6wAyygefG0ddhCUEOkER9gwoMZqzsITOIBR6zjQIHTXqJDwhAIowUNk4CoZGCCxiAbqzDurW0UbH4I00eKMDAG7tE7etMxiwAAAAAElFTkSuQmCC",
		progress_bar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABOtJREFUWAnFWbtOG1EQxcbYgAwCJBoXRKSJiARJkyp06YmUOhVfwA8kBfkCfoCKOhL06UifEClRUgRB4SYSUJinwOScmz3WeLzXu36gXGmZc2fOzJy9+2B3XRgZYFxfXy83m821+/v7pyhTMxur1guFQh0x2u/FYnGvUql8Y6CfUeg1ieLu7u7WkfcaIhZtPuYjEDVCyyFMm4xD4N3R0dHtXkW3KqhSzF5eXi5g9T4g/hZCiuSlCImlt/mR10SNHazyu4mJieO2YGSSKRQFyxC5CbuBGhXYIJD1hGnTht8Rz4fQK+RtQex7cG/SasjXVSgKz19cXHwEeZUJvpGKyGYJE89b5O1PTk6+gf3jY5pHheJcXLm9vd2DuEctcnL+URBHlnDlyXbbEcSOSqXSGs7dA/GtTRWaiPwMIVVLfmgMsQ2IfZkmNlwUVgDEzScrWeWKcdBabPnDxOhRTXrP+7ptQkEs85yEDYdbh5jWYhWx4i1W3FvLsdjy4H+UaChbf5vQ8/PzDyCuskjaxkT6Nax4YsZkxZNVTjcrLm6Dq9Cyabmtc5T3SdzIfyI4rgRLzIMlUjvAOvIxXzgWtz3AucI/hie6z7ZWFCK5mn2LZBPtIK3FVkBeTC3UJH5Y0UajsQzHFwRbwkX4nxar2kT/59Vq9ZuErecRaVeJ2G/cKXEsFs/6iLMGzlXqWydPQl9zoiYq7K09x4j9xhr0aQiL5+O+H+PyqQZs0FbAYV+B8q8MsCCJaiCs5Ky4KZ4L5q2HZ4JnRZDXVFWCaC2OxW0jYg5Zi+mTX5Zx28NixuxAbK2I1VyyTotVtN9GtrnFtkdOvFQCkU/mqcMX93PuAH3aodQiw3HWimgUFep7SNBDrbBdCGKz1cKKipAmjDEJFBaffvmYK56s9fnaaXPlyRpOrWQbCUuItywgDosIizdo3AjrgLzq+aYYmqp5BytxSFCMP2g81pcaecOvxwhZjWN5D+Cv82KKCuWh5KC1WEJ63ZFe+aZPnRfTD+MIglRQflmKZcyL1lwx5Xu+6sSszze87/wXyg8K4YXKE30jHzeFAsziZ8Vj9fAetRKO7dnZ2W+QFrMKZcV9Iz/vM/9wZmbmcXh6QoFdFtUho7XYN+x3bmta3K2etAWh/BYEBx9Suw5bnNhvTBana6GcQWqiNtKDUD5BA++oiQSQIB+xHygUXLQWe94A851E28i/TqjEl7ubm5tfeJqqqClFEkuscCzeq6Bu9RC7woeIzpc7vu1B0JaSJU6WIoRpuYlLm2djDfJyDn48Oxa3LQvNy7gDfEIwfBSzQpRgrRVr/f1i9cMT/f709PQrzFtf+MI5qsIM4J71BvMj+ihElthvigXSEP4k/Y4glF/2WiJZuk0oHVNTU3/Gxsb4etLgfJjD7zhry5f0abA3Nfi+HUJJwJV2gISXgGFllaSitBYrnmV5aDloLU7yjtiTvZN5m0kVSgYTcBq8gKB9ZdjixBQrmybc+ixWPePbZ6+YSPLbLiYVsBbFyqenp5sQtAFcsTGJpOVgY/k4F47FQQmfxmdnZwf7NM5mGicnJwto2PXHBi9Uud6iDv8L7oyPjw/vxwbfBIKX0Wgd/o6fbzzXz5F3CN8udmh7bm6up9+cMg+9b2bnEL2C5vxBbAmWb7M14PBWizkfyPWD2A/49yAu9UKxNWP4L52elthnghTmAAAAAElFTkSuQmCC",
		mute: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAAAq5JREFUeAHtmj9LHEEYh281ELAIJo0kIFiFGEggKFYBLdIawcImsRFrP0Eg9x3SmvSW2iWdRWzENoJNrASbKDZidXnec0fGZbO7M3t7mdl7X/jd/N+d37Nze3u72+loKAEloASUgBJQAkpACSgBJaAEWk6g1+t9QL/QFfqOnrfc8n17GB5DX1A2zqmYvN+7pSWMTqDdLAGrvDEM62M+O2GSL9Fbn7H2GLYxRXkfvbfrM/npTDmMYgqBpB9f+Ux8Zsa4WfQblUXXZ/uuY3xWxBNrJ7Jst3HiBIP+S4w7QDMo3sCIrAQ7Kq8MBskvw409uCTfDZYUE0+QMwzGfCoxndccLgg5Qsy4Mgz6PkBZcHmm8+rCBuECA3c7eQ4r1oULAgPjAkKCfOnKoM8cukA+0e3vKLQPnLxGJ2jezI18VRh/6OsawYKQ/wAScoSHASNYENd9DLcfw4ARLAiLQz/bNIxoQAiNJmFEBaJJGNGBaApGlCCagBEtiEHDiBrEIGFED8LAmOukQYXPFWgrQAwCRmtA1IXRKhB1YGyl36ywEnFUI+QK1PWc4XNftXloNSCYoc4wmnflsQfjpmYaPwwAuNyBLuIVNwyc/Sxy59gWLwyMLiAxMKgIAobTEypzSoHAU/LL6JmpK0hXaXtV0C5Nl+hdkiRHUmD7Mq9tJE/STHwjs0mfnqmIKsXUI/QDlUUQK6NRuBCo+oCn/TCENECqPPIbGRgfAVL2EzwyMJaAIWaLYmRgVHlRRJ6MvTEnMPKl9zNM36hSjE2hQ1QUn21TdMyDsWL38cn/1392XBOcM+lFtFcw+VO7Lb2O2KROritMPDSZqFOO8r9eLzyj7XGeuXRlrJCuobun83l9o6vD0Do6RuaF0xfRmdAJKwEloASUgBJQAkpACSgBJaAELAJ/AdAd+NGImJR6AAAAAElFTkSuQmCC",
		unmute: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAAAwNJREFUeAHtmjFoFEEUhnNBLASDKSQoCKkkCgFBAyIEbYIYtLGw0TQGLIQIsVYRsU6CAUECabQSCShBSdIIgoVYWIhJGRACwUaSTgLn92AX5g72bmb2dm5ueA9+dmZndmb+72Z3Z5br69NQAkpACSgBJaAElIASUAJKQAkkTqBer99Gv9AeWkOnE7fcaA/D/WgRNccuJ4411k40h9Ej6H0zASN/N4T1QyE6KeoDs0OUraILRXU4f6pFWceKugYCCGdw8RENt3FTa1PekeL+jrTi2AgQrnDJVzSMoojgIIBwB+drKKqHYFAQQHgEgNfoMIoqgjwjACD9vEJB3gA+hCsHAYQBBvYOTfgMMNQ1XiAwd4IB3kAnLQZ6kzqjFvW6WsUZBBDGGPE6iuphV5aiz8NyITUIAtEHRKtVYNkfxvl6ZuhxNItKPYOcbw1GGtur7xNjOi8EgXGvVqstSdo1fGaEax9V1zf3Ii+BMe7TYQogZjBez8zLDH8BDOf9Sc+D4FZ4i/m5DIQczqHrRt4q2fMgMpfPOO4bjmXt4hRJgGBW7OFaNnJ5XMoTtsckQGRmtwzTNiteo7rfOqKhgVQyKc2IEeNH2THSVskkQPC6lB3uVcOxfP1yiiRA4PgJOmo4XzHSVsmeB8FsuIXTh4bbH6Tly7hT9DwI3C6ifCV5QPoBr9N8pWkNIwUQvw2394HwxchbJ312n/9oPaYd6DXGI1/GfwJhw9p5U0UfEN9pw3nl1tRvx7KY/0Nj82Ub9Lk1Zun0b9mOY7veeUbwC3zjSX0WI0l9vK38h5HFDlpHvvG08kHSgc+t4TQuZpDsDCfRstOFgStXDkL8AOMATZN8HNifdXdBQOSjAcZz0lNIXsFRRVAQ4hwYbzjIBimqN09wEBmMzxxlLbKNooiugBDnzIxNDheRLNBahfO+oVVjRWVdAyEDAsYuh8vog+QLYrvgfHqnWWAU/b1wh7LB9By3cYTpKbSJ8j+cmp/f2lytxUpACSgBJaAElIASUAJKQAkogfgI/AdvhTIXwR7/hAAAAABJRU5ErkJggg==",
		fullscreen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAAAntJREFUeAHtmb8uBFEUhy1LtwmlnkRUIv49AVF4AAqlV9BvpUKhF0qeY4UoeAFKNEKj2EXWd5IZO8Yx7t7ZcGf2nOSXuXPnnJv7++bO7tzdgQELI2AEjIARMAJGwAgYASNgBIxAYATa7fZwYFP62+kAYAU9oBY6QNWsGXB9HR2jPTSZlVuoa5gRCMk44USFQf9OMpH2C5oulGFtspgYRrIS0vENBgk19J5O5PxIG7twfRiRx0GLLzBImNWS6LsonGltwhipIjGtxScMLs5pCfRdauMWsg8zv8LoCxBy9xxgLJGjRXlWRLyMcZm1Mq40CvSVD4TDytBYBAdiML6zeY6VSuWN+g10mmec/6xVX4JcJ8StrpE7gYaiml2O8uY4E52X/wAEeWN809a9Q19wj4bXHcOo7B3yRHAgfD8jVr0IdoranWYYLV8Qjzmnf5uzPoxynolJJLtIn3ilaDEMJ51ZVDrN7lqYka30NppCrivrhtx9vm7POVoYASNgBIyAETACvSHA1/IIkn3MHXKNJokNNN+bWQQwCmbSP/+7wpC8JzTuY8P1RchnbN+aTd9C6kbRmk99iCC87qiP+WSN9yt2cpBetmV95xjvmdppXuHvux0jxBXRrQfJb6EztOwDQQYILmRFOMTnn0jBGejVhBwgxCnlhhG7dDyWF0YGADGtRTlhaE6jvqx/1MoH4ycQ8hnEtf6BkQWir2AAQjZQ6Wgmv5W4mLUy6sncwrYxKbvIdDTShkj4CcZ1OreQ5xhcQLKLjEPa6vaafg3GYSGNa5PG4DjaipS5CYtg1Dleo0M0po1pfUbACBgBI2AEjIARMAJGwAgYASPwjwQ+AGKQVkviB/S8AAAAAElFTkSuQmCC",
		extfullscreen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAAArVJREFUeAHtmb9rFEEUx2+jRBHFHxEUrEQLGxUbm9gKsbXXwn9Awd46f4ONYNLZWQUtrARFERSEoGATSDpRo4WKnp8Xdi6XcW5v5+2cN4Nv4MvMzrw3995nd2dvZ3s9K0bACBgBI2AEjIARMAJGwAgYgYwI9Pv96+gz+o3alnUMF9FsRqnoQyGR8+gX0pZF/a9n5En2S1oCtd96RulshTKjDOig0i9bNy2Idx0zut/RP7n7buWMX5V+G/gJhDtK/4m5aUG0CUhgLVRV9bSN8bRttLdGm7j3Y7TC4jjfxnjaNqlB/PASKgZGahDLgPDXjyJgpAaxBoiFEmGkBtGrF8fiYCQHIWtEiTC0IL5LwoEy6B8D4yFPk6MB/6l1aUG8HBHxjv4GGEfwvzRijrK6OaPL9QuUq+SJESwYzKNNZ0j9E50OGpfYSTKX0W2px8WPzQX0CD1HV8fZ27gRMAJGwAgYgXwJVDmGxuNVtvtvoGNoiT9mH5rixF7yOIk+YvupybaoMRJ7gFz5QmPk5g5jZ9FqbSzfWO6iXUUlHAqWJGaR/80kCAO7CjkINAflVmju4vpI5/0gpe3GXzAYOrU9vKP1ODZp7UtX7O/E2l/DYdNzOsCxvwd62LNxh4dco22dJQgWvGckcAX9s22/LEHIWWx4hZ/IHmi2INrAwOac2P03hWXQ389wK+M31/DqF7Fwsr4iXDINt8k+Z9O1LgKEJNkAoyuDLf9JfvvsFCCX+gkmuInOoOET9objiyhp7EknI7gkpYbwmsnmlBPujfUbJh3rO0l7uRK0ECSu47HB5QpCbosuJTqvaIcu0UX4PomwDZm+CnUW18caMYPuIU3ZwEneS6JKlhszLgMSks0W/6nhhofrPRyI7VsesyvDA9Y2AkbACBgBI2AEjIARMAJGwAgYgQwI/AG0F3CwWz7KGwAAAABJRU5ErkJggg==",
		specification: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAeCAYAAADkUhb4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAcr0lEQVRo3q2bh1dT2bfHM//Fe2u9t95v/d5aM+NUnbGMvSsKAsqADaQJAnYUy1iuvfc6FkQde58Rex0bndBCLyEQ0gi9yBXZb+997k1Cm/J+v6z1Wefm5ia5ZH/PLudsNMYq+MRgBk1pFfQx2iCmqhokFaNCpQ2xglShYgHJQJgF5YQJJL1KVYdUZuyQSo0fpTI8Lqn86KC4sl0qrhAUGT4gYiwsV9B/kAr0MpNfhujbpLxSJ7klxHtJV/xeynHQKmUXOckqbGEyC5xk5Dc70BJ5zVJ6XpMYc5uYtNxmBEddk5Sqa5RSc4gmKQXHlOxGHpNxTM5qkJKyERz5OFOQqJCQUS8laBXw+J3Wydv0OukNwmNaLSLG16mCV0SK4PeUGkFyjfRSJalGepFkl14k2qXnTA2Pz1QSqpmnxDsbUi09eUvYpMfE6+qYuy+sfeKfWzTxL8yfaPRG0BRXQmBi9kf53G8tcOxqExy/1ow0CfD5MVeuCI7i8dErKo08Hrnc2COHLznHw5caHBy62J2DFzpz4EI9w8e/1Hdiv8p5J/vO1yFi3HtO4WwtswfZHVcjOFMDu87YmZ2x1YgddpyuRmzM9lMKJ62wTWHrCQuz5Wczs5k4TpiYTceqYONRJxuOGBnpcCWznjhUAetUDhqYtQeIcliD/LRfL9gnWL2vDFbvLYNVxJ5SWEnsJkpgBbGrBGJ2FQt2FsHyHYJlxPZCiGYKIHpbASzdWgCr9xTBmRuV8p3HlsDfnlk0mmIj9EnMbpcXbrPDxHBTm9s8k4xjZ+Yp8LHZgZvL+MdYnET8MZN4tCrH1j8m0mWMtHWHP8eK92hhJoSbEZM8IcwkjyfmVsnj5hrlsaFISKU8hqmQRwcTBnl0kEEeFVQujwwk9PKIOWXM8IBSebi/YJh/iTx0NlEsD51VJA9BBs8slAfPKJR/mFEg/zCdyJcH+eXLA/3ymAG+ufKAHwmd3N+HyJG/n5YjfzctG8mS+01FvDOZvl4ZzLeeWvkbz3T5mynp8teERxrzlXsq8+XkFCRZ/mISkST3cUuSP3dLlD+fSCTIn00g3smfjn/X5haaDqevVci3n5j7aNCdx5y908zGn77cCn7LrB0uwL+GTcH1+A9Y/levqe48Lq/uDr7mi9f7RlvhR2IpYQEfYokZpi0mTDB1EVEF3gsJI3gRCyrBk5hfAVOIKAN4RBLl4E5E6GEyMa8MJhHhpYxbWAlMJOYWwwQitAjGEyGFzLiQAhgXXABjg/KZMYF5MJqYk8uMmqODUQE6GOlP5MAI/2wYMTsbhhOzsmAYMTMThs4gMmDIDC0Mma6FwYRfOvxA+KYxg35MhYE/psBAnxQY4JPSMWBaskISfDr+bduKXQUQ/8ISo6EYTu6bZj4ZHX8kAnrH6gR/WF8F549s7XZNp9dcn0fbOrPU1v3cn1LdKz74eT74PdOWEBaYuhhZZGa8iYUmNHgVGrwKDW5EYxOVaPBK8CAiK9DgSIQBDV6Oxib0aGw9uBFhZWhwZG4pGrwEDV6CBi9GYxejsYkiGBuMBBXCmKACNHgBGjxfMCcfDZ4HIwOIXDS2Do2tQ2PnCGbloMGz0eDZMHRmFho7E42dicbOEPhloMG1aGwtDPJNR4OnocERn1Q0ODItFfpPS4H+U1Pg+6nJ8L13EnznldTRf2pSx2fj38oLN+XC3RcmSUNJG8VwFwH8qfF9lRkuflwLQ8fqzHcYemkvx/ycZqeY1b7R/x/DdxeBb7Qy8+k5G18IwEcRwLTFThF4LyLjmxTjCwF4ISwEFoAwvpj5Bp75LIBwIQAhhDIUARlfCGB8JwEU4WwnARQyqgAcIkDjjwogclkAI7sIwNX4qgCGKgyZ3sX4igBUEQgBpLAA2PiqAJDvUQCfKgL47VmVpKEsnRK0iX8qADHTycBTFlhgcqSZn89eSQhXOznSwq/RNb7RXQzuwKZ8lg2NQZ9lRWM4vYFvTyxzPa7uZHwy9nTF5U9bYgPPhTYcxTUsgCWKB1isCkCZ/S4CINwjjTAhrBJDYYVj9hMTwwwwNqQcxs8tR5cvPADN/jHBpWjIUjR4KV5Tqsx+cv89hIBQEoGr8cXsH6XM/pH+rh5A1232D52RxYYf5JuBRtSigcnla1kEqgAGTEtDg9PsFwLo7yoA72Q2PtFfEcD8jTq48wQFUIJlGWXkwgP0PvvJoD44i9yjzLBirx3u/d4MxQYZauvbGTqmcyv21uA1wiP49uIFyJDT0PhhUjWs2FcDEZvsDvc/FY3ohYLwXCjE4alAx14LSSw2NrSY8SQiG2Cyh6/bIGSdHb+/FoLW2sF7sRCY50ILvp8w4/vNPHpEmfAeyehi9ntEGcF/pQmW7LBC5CYzx38y/mR0/SFrq2DxNhME/VTJAnDHUOARqYew9ZWwYIsR/JaWs+FVDzBsdhFgAogUACZ/zCC/PDRsPgtgREA+GjoPDZsLQ2bqcGbr8FiHBifU2U8hIBuFIXKAEbOFADzm6SBoZQF4R9H7MvCclqH4P8o/A4bNSBfGR7c/QHH//V0F4MUeAFgAG3Rw+7FR0lA97hSAtVfj0+zxjbZAPBoZoAN6f3TwNfyeJT14gqUiIaRZv2p/Lb+jtqEd5qyuBo/5Viw7GyAjvw1SdW2QVdAGOUVtkI1k4nFKzntIy22DTT/XscFJCBGbaiDuThOErrfDieuN/HlxdxphZJAFy716KK/6AIV6GfLLZNDmvefPLNS3QVF5GxSUtcGCrVac3ZUwd50Z7HXt/P71h20wLtQAIwLLIWa3GTo6OsBk+8BJYL9pxbB0RxVfZ6hqA8+oMpzFxZz8kftfsduIpSOViSbYdgLLQywNd502wazlJRC5QQ8Zec2QrmuCvJIWyEVoTMPnuuJm2HK8ErACQM+Qg3E+C76eooWvPbTQ10sL/zUiGY5cMPL33n5ig3+OTYYvJ6ciKfCP0YkQsjofyo2tkJxZDyNnp6Oxk1kEaghwCiCRBRAl5cDNR5WSprC8XTp0sR6oXOtJAGR0mvk0puneKyYG+NDeAe0KHz8K6LhD0QZdy16jmycQyZ7HfAsMDzRD7K1GqDB/QANWw6hgCzxLbOX307msQjR6NhqdxIDHqoFOoqHdo8Ss33Wmgc/ROgHlMvR439YB1pp2uPqwCZKy3kNCRisLiR7yhw5IyGyFRIWITRb2AOPmVsCB8zV8TXJWC4wOKofDF+zw+G0jtLz/qPxNLejlGqC0QnxWWWUb3H1ZD6v2VcFw/yJ2/Xkl4v5JNALxexy7ZIXoHQY+bm5th1cpDfA6rQGeJ9ZBlVV83vk7VjR6Bs9+r6g82BdnZA6cM6I4DJCgrefrclEsO04aYG9sBbPrFB0boKHpA7++6UgZfDohAXOCFJ79nTyAtxBA5PocuPGgQtLQatvBCyiACHOPIYBEQW5fzHxh+I8d3T0ACUD9w+kaetB7KBywsFySPxp/udsIz5Ja4d6rFrj/ugUevW2BqM12uPVUfM+GY3UcBk7fbGTjjgm1wPnfhIHJY7lH2VgAW0+KH4WEQAtJ9CAPcvVhM4RvrObvpgRw20nhbW4/bcJMvwpmxpjwXkx8TNn/xPBKGBNigJuPGyA1p5VLwISMFjHTTTKLoqDsPRSj59AV40zLaoa6BiHI2Bt2GDS9kAWQWSDeQwtB47D0u/ZQiOrAOTMs3FzOx4kZjfClRxZ865UN/zNGC3G3rELYV814DmO9XxZEbSzp0b+qv3NPjzeptVBTJ7MQhs1Mg37oBfpPdcb/fl6JDgFEoACu3TNImrzS3gXACd98EfNp3pPd1Rtobv3IK29XHzQ5bkB4AFfld3BOQPGb3L6aAJIA3mpbwWJvR9fa7nj/lhN1cP2REAC5+aA11Xxc1/gRE0wrXLwnvusICwBzAswHdscJox9AkRy/KgRCoWD4HDMErLKB0fKhhx9NPM8vbeMy0GcJxvntFli0zYJx3Yz5gJFDwPNE5fsu2mHoLKrz9WjUMoz36PbnlMCTt43K6zb4YYYQQJYigMVbK6CPuw6Na+Pn+1EAi7YKARSWteLreli6vRzmrS+FZwl1fP70dQt7AFoDGBuYA35L8sFvcT7MWJoPE0PRYA+EUH5ProUpEfS6Ds9noSsX58/eNIH/8lw4fc0IbqEZ8K1nUu8CWJcNV+LLJY2u5L104Je6XgUwKdI5+1V3Tw9yqZT14/tg3ZFaMFcL9/NREUC7ixeg64QAnB6AEriJ8yyOGZ+Mrp6MSh5BFUAA5gX0WWTESSSAeGEQcvVj51ph5b7aTvlIRxfPlIo5A4mMxHryRj2cuFbPY+zNer7PChN+boSRDU+fo/5tx67UwA8z9fAqVdzbsct2GB5QiqGCKgGxADQ6iAwnBHD0ks3hAVQBRG00wD/HZ8PpG04BLN5W7nKfzntVPWbcTacABvpmYj6QAf0w6+/vk4FxPhmOXxa5x93n1fDZRDJsGvzPqESIvS7OX4m3wH+PeAv/OzbBMftd3b+rAOatzYLLd/WShjZP9p+vwx+iiwCixaoZxW/K8FX3o/5IlJjRa7R6SG5+zmobz2r1D1Svo/f6KmsGaulGYhgfZoGdsXUOl02vU+L24LXiQo/XcWJHD0rk3DDTv6R4gKNYtk4It0L4BjvnED9fa4S4200YRlrh4ZsWTgIpmdxwrJbzBgMamsLYO7y/J++aOfuvb2zHz5XZ/U9fXoXXVkNeqYjFx1kAZfAyWQjg8IVqGDQDk7y5wvBjQ0phmH8xfl+D0wN0EcCp6zZYsNkAT9+JEHXwPHqALUIABegB5m8sg4Vb9BCypgSvcXqArzwysFTMAbe5OpgUhuDoHq7j2v/Crxa+7um7Gs76J83NxmQxHS7Hi/PkCUbMSocJwVpHCajO/u/Q+E4BvJHDUQAXfy2TNFmFrdK+c7WKAKydBECZP9X5VOZ1NSx5AEoOyaWTCMiAbhFOA6qqpvfSOoGoCERNT7F9z9l6xwy4fL+Joaz9zjPxo0tH62DJThE/qSIgcdA1riHAY74Nlu2uhXcZ7zlnICFR8kci23qyDuN+HYePSkwoZ6+0QJvcAdW17TBrhRkamz+yAGj51x2TwJGBBseMP3pJCCAlW/wtlPS9TGmC9NwWNDDG/+xm+D2lEcX1QTFcNQwkAYQ5BdAmfwQZoVGIyIIGFwJIymyEr6ZkQV/vbPjHWC2cuy1ceCwK4NMJWghbW9x7jdXxRxWYmKQJ2jpH/U9lX3cBvJXD1mTChTsoANoe3esQQOfs/88FYO0sAHTp97sIoKaLAGgMxNj+GJM+Mhg9qMTLL5V5vK0IYN3hWth+SojkRXIrG9whgMsoADQ+JYKUPHLpdoSy6XZoavkIu+LE+54ktOC5DxxC/FdZoAVDgcX+gQXQ0CQEQGv/5AXcIyvRQ7Q4BDB0th5DRg1m6s3QqlQBReXv4UVSI4rog6MKeJ7YCGsOVHH9PyHUKYB1h4xY8xfAlft2RxK4WMkB6ho+4Hc1cjL4BiuBCpOors5gCOgzWQtTF+RxQnj6mhlOXTOhwMxw+BcjpOU0KDlEMxy7aMRrquDEFSOzP84Az96JCaPNbXCs/nEI8HIK4DtVAD9lwvlbJZKG9sNpq3RSDznAvy8E2JRyUJSAM2Jo8cYCy/eIG36d/h7O/drErjr+d9WgtWx49XHmdiMaxFkFUE5AK31F5TIUYJ1PawL1ONvJyFT60WPRNjvPeCopozbbWJQkkKA1FhYAZfeqACbNq8D7b1E8TA2MCdbz6p/vEgN6i3YuHwNWVsDXXoVoVFFRxN2yQ9+pBY49AFr3VwWwcIsBPpuUg0Z1yQEUAVD40eY28ZpAak4TmJQyMPaGyAFoFfBL93T4YjKRhufS4T+GJjrWAX59auPY/7lbMnqMJOgzKQn+c+hbWLGzWClj69HQigdwSQD7eToFMHd1BiaNxZKGmh/2nK3pHgKUtX1KAu/1kATqitvY8OT21/+dJFAJA1QZrD1cq9TXbRC9qwaeJmJ2vKOGy8HNJ+o4USKj0oOSxRkx1bDmUB2v+FEFELjGzt9FeQAtAb9MaQVbjfBWzxJb0LgWdvUU249cqnOIadNxO98vC2CB2ABycxHAIaz/B04vg1GBetgVa1PylFZwCy/DWV2CpaL4rAt3a2DIzCJMCkt488dVANE7KuAbLx2cuyMqmf1nzZz10+PR6zpM8LKxstBhzM+ES3fFd9CM/8pDC6MCspWdwCwYjowOyIJvpqTBmRsmvu7hKzvG+DRe+RuCOQCN/xyTANt+1is5gh2+dk9UkkBnAsgC8EpgAYSiAOJuFEka6nqhBgk0tOwX3VMZaOlcBioxiNwiNWWobvkvl4FKEkjn1hwSAsgubONlW1rWHYfJYfhGO89UMuZJZXXv5pNmGBtqYcPTdTTjA1bbeR1gJgqDksIVWBXQIhDN+JkrxOrlvA2YjG2rhkoMAzSLRfh6D3PXmxnVA7iFowDSlaz/ih3zBxuErTdC/EvhdvfG2bD0K+Xy78ajOmXhRtT/k8JLeAOIBJCZLwQQsaEc43s2nLwm4vvuWBOsO1ihvM/GAhgfkscrf5fjbcpikQlzAy0vAdP6v7oDOHxWJnwxKRVDgRDAg9/R83ilwg++6bz5Q9u/gStyIbdY2OLYxQpeCBrgk+yc/UhfzwSHAEJWZUDsNRQAtTTtPmMXAljWfQNILARZ/t5C0IeuC0HO2d+TACj2k0Hp/KkbwuDNKADaI6Dkjh73sTykpWLyAr7LBCSEifOsELm5Br2U+OEpCYxED0IrjbTuH7reBrklbcoSL3X9iLDzPLEZpi6sgskRlbz/TwJQcwD1QfV/axslkVgtROp573/YbKcHuPqgFgb60U6fMD5BGT49yBM8fluP8b1NySssGM+FGEgI/X1yYGSAjjeBUrLF37zxiAENm8Hr/10F0GdyKr5flHv3XlazAKgC+HZKCgTE5DrumdYIRsxKw9fFur9j9rMHUAXwRg5eqYXTVwolTWJmnUTtUJMje14J/FHZBPrXloJdF4GEocmYtH5AjzxMAOmc0SrCyFstzlDJzqXfou01jplLGX1tw0cOC7TpE7zWznmD+vj1eQvOfNpnsLDw4m43OESx5iB+3rwqmBBmZBHQvdISL23+kPEpB6ClXs5J0mhTy4wxWhhz1T4zz36PKD0KoBj2nLE6vrNQ/x7vvxXmSQYY7l+I3qEGw0UzC4CWhdN1dNyMoaQKrHYZcxIZxgbl8SaQd1Q+JqhCICWGVizrcnkPYJiyA9hJAG6pcO6WWYQ3TPb6eqIH8EtDI6di2ZcBq/YUw6xoHdf/fV0XgFzcf19XAazQwsnLBZIGSwZFAJYuArB23gxaIsa/vxlk67wPoOQAtLO3FMs8Mj7F99mrqjkBXH2gljN+2vWjbV4aqSS8g8Z9gDX+wzetXO/PwzARtaWGE0VaKibB0GohbTLRd1Pdf/xqPRy9XM/bvpMiqtBjiA6gieFGmLHcBL/crecVwAlh1PVTAT8dsEK4ZIIhs8ogYmMVFKFxaQ1gZGApLwCJBhCx/bs3zopeqR5zDVrPb4Dgn/Q4owu5+WPUnAKc2fmYzOXjuXwYPCMXZi4rZiFsPlYJA31zePfPZ2EBPHlXCycw4/eMzINBvlm8DyC2gJ0NIENnZnAOsPGInoVy5EIlGjfVsf//nXcKCiQJvvZIUppAnAtAztnfWQBBK9Lh54v5kuZteq1EzZBOAVh77P4R28EiHFBcj++6HYzZeHzX7WDX5hDXrh9l65eyeBKJzxLxnAxInoGbRJbZHE0jHguEqyePoELun7aEaSt4UqSNhaJWGeIzhQgmhJl4G5j6AHj/H6H2L9r/HxNcweUfJYG0/Ts21IDXU/OHAcOCAQ2th7EhZUoPgNL9E1bGDSBDZxVxAjhkZiEMRkYHFvXYATRG7QAKJEHkMmoHEO399/fJ4vX/wdOzFeO7uP8ZmY7un8HK3v8AH8FAl+YP6gLiFjCflF4XgMj9kwD6KQIIjEmD4xfyJM3r1Bppu1MAHX/WAuZsCLEoDSE20RCyrLeGEFvn9q8/aPtS+/66nxdNH674Kl1Afo7nPTSALBH9f872L2cHEGX/3gtFBeChdACRF6DuH+oDEO1f5dwKxu1f4c72L8LRA6g0gDiMr3QAje3SAsYNIEznBhDqBKLtX+4DcGkA6dQCprZ/uTSAiPYvpQVsWqpj/7/T9q9L+ecUwLsOEsCc5elw9HyupHmVggI4ZVMEoHYEWXv1BD+6tH45++2snVvCors0gah7AEv/Ha1fPfQBLlX7/2yK8a2O9i+1+0cVgKciANH/Z+yl/0/0AE5WWsC69v916gEMcbaAqbO/Uw8gd/84BdC9A6in/r9eBOCr5czfVQADlB7A/n8iADJ+3ykoAE8hgIDlaXDknE7SvEy2S1TyoNtWPUBHT0bvtdnTtSm0276/6xbwv5OuDaC2LgJQev8c7V9O96/2/3n20gDayfh/pwE0uPcGUBZAgNIAqhrfv5cG0K7uv4cG0IF/pQG0k/t3CKBDFYB/dCocOosCeJ5YHbMHa9zJUZY2ygFIBH7Rlg5fGhVXjsfs4qkS8O2h/dvXhd5e83OMNkeM79ry7dvDa769vq62flcr/YKq2NTWbwoBIvaryZ+30v4tWr+NSut3pdL63bkBlFq/ROu30v5NDaDk9sNLldZvpfcvVOn9oyZQbv0W/X8UAkTrt7P9exS3fueK1u8ApfV7dk6Prd+i/TtDtH+zEHpq/Vbav31E/KcwMGCasgs4VZSBtPb/nXdiByZ/aPwEHN9RDtAWsjINDpzJidE8eFXd5/J9qxy+gUunNvIEmIX/NeZbZQ/G9jeodhkVFvTMFJdxygJ7r3gQ+Dnu+LnuUTZ5Mt7bZP6nEeUfTfifU5z/3DIhvEqeEFYlj59rRCrlcaFEhTyWCKmQx4QY5DHB5fJoIkgvjwokyuSRxJxSeUQAUSIPDyiWh/sXy1gaIkXy0NmF8tBZhfKQmQXM4Jn58uAZ+fIP0/OYQX65zEBfHTPgxxymv082kiV/P03w3dRMJEPu501o5b5eRLr8rSeRJmNFgKTKX3ukMF+5E8n8jyFfTk7ifwz5YlKi3Mctgfl84juFt/JnE962jZyVCGv2Zsg7f87uo3n4yqa599IWeCneIu+MtcCm4xbYfFyMzDEnG4+ZnRwVbHDlCI0mHE0g4bHAJDhsgvU9cUiw7lBVJ9Ye7M4alQOE0TH+ROw3wup9lcyqfRWwaq9g5R4Ds4LYbYCY3eXM8l16wU49LCN2lEE0UwrR20thKVMCS7YJFm8tFmwphkVbigSbi2Dh5kJYuKkQFjAFMH+jwoZ8iGLyIErKh0gpDyLX50HE+lyYR6wjdBC+VmFNDoQx2TD3J5UsCF0tCFlFZELwqgwIXikIWkFoIZCI0cIcApM7IoBYlgb+RDSRCrOXpkLwilRYsydD3n4sO3D3iSyN5vEbyycPXllRBOY+D99YYh69NksPX6mYpAe/m6T7yIOXOCL3XlZJ914I4l8YpfjnRuku8YyolH4jnlZKvxJPaKyQ7jxBHgtuPzJItxRuPiqXbj5EHji5cV8vXVe4do8ok67Fl0lX7xGl0pW7gsvEb0SJdIn4VXCRuFPs4MLtYumX287x/O0i6fwthZtF0jmmkDlL3BDEXRecuV4gnbnmJPaq4DSTL52+guOVfOnUlXwxXhacvJwnnbiUj+Q5uZgn/XwhlznuwrFfnBw9r2OO0IhJGiVqh8/lODmbIx0i4gQH47Klg2cEB4jYbGl/bJaDfaed7D2VJe05lRWz/VhWn10/Z2r2nsz45P8AnzwLrPkP4u8AAAAASUVORK5CYII=",
		close: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSA3Nl1FugzAMhmHsibdJ2wWrCsRtUFcJIU29Sh92nD1sF4iY/yiOAiXBDms1S1UA2/9nI0xoUfwH67ru5V51LLWfGNS27dUY89U0zfs0TSVf37tCC5rQBoP1LADVwEEXK+e4jON4LMty4sCcFVCCfVDuweWbqqrehmH4th3jgBxDIH5Awp7OV6CQJ5RlFf6WRgKzOpdoeTDKkSQgLmVSjRkYgtLENbgm9wacC9dAwVgFa+FaaBIshedAN8FbcPgXc4pLokmI3moosMW6cn5+OeBUBEWgCIzACBwuNjEUCWIwghNwFRRafpPAySNN3HGiW65X1bUIHIFeHDHr4XrmcmNrDIptEzk0TlgYjl0Nz8LmlprsOAXlvVoSg8qWFgVrBDWxXMAqOEdIm3MD1gpwB1g1uTOwJjEEhsdSDQ+WJoSQ2LFEy7+5aAxOJMRjAU3VCyEsAk+8GzeedbgxamBYsx0/8vO2ruvXvu9/bMf45KQqP6kUQ7/zX3xTo62g8zO0wQAUvpkt/2bMnDtP7qmtKu0XjW6Qb07GuCgAAAAASUVORK5CYII="
	}

  // 当前浏览器是否支持video标签
	const supportsVideo = !!document.createElement('video').canPlayType;

  if (supportsVideo) {

		// 视频播放器样式
		let styleVideo = `
			<style>
				html,body{
					margin: 0;
					padding: 0;
				}
				/* video容齐 */
				#jddh5video_container{
					width: 100%;
					height: 13.2rem;
					position: relative;
					z-index: 1;
				}
				
				/* 初始化播放按钮 */
				#jddh5video_init_play{
					width: 12vw;
					position: absolute;
					top: 50%;
					left: 50%;
					margin: -6vw 0 0 -6vw;
					z-index: 11;
				}
				
				/* 视频 */
				#jddh5video {
					width: 100%;
					overflow: hidden;
					z-index: 10;
					object-fit: contain;
					object-position: center;
				}
				
				/* 控件 */
				#jddh5video_controls{
					width: calc(100% - 8vw);
					position: absolute;
					bottom: 0.5rem;
					display: none;
					justify-content: center;
					overflow: hidden;
					background: transparent;
					margin: 0 4vw;
					z-index: 11;
				}
				
				/* 播放暂停 */
				#jddh5video_controls .jddh5video_playpause{
					display: flex;
					align-items: center;
				}
				.jddh5video_playpause #jddh5video_play,
				.jddh5video_playpause #jddh5video_pause{
					width: 8vw;
				}
				.jddh5video_playpause #jddh5video_pause{
					display: none;
				}
				
				/* 进度条 */
				#jddh5video_controls .jddh5video_progress {
					display: flex;
					width: 80%;
				}
				.jddh5video_progress_rate {
					position: relative;
					width: 100%;
					margin: 0 3.2vw;
				}
				.jddh5video_progress_rate #jddh5video_progress_dur,
				.jddh5video_progress_rate #jddh5video_progress_cur {
					-moz-border-radius: 5px;
					-webkit-border-radius: 5px;
					border-radius: 5px;
				}
				#jddh5video_progress_dur{
					height: 4px;
					width: 100%;
					position: absolute;
					top: 50%;
					margin-top: -2px;
				}
				#jddh5video_progress_cur{
					height: 4px;
					width: 0;
					position: absolute;
					top: 50%;
					margin-top: -2px;
				}
				#jddh5video_progress_bar_box{
					width: 3.2vw;
					line-height: 3.2vw;
					position: absolute;
					top: 50%;
					left: -3.6vw;
					margin-top: -3.6vw;
					padding: 2vw;
				}
				#jddh5video_progress_bar{
					width: 3.2vw;
				}
				.jddh5video_progress_time{
					display: flex;
					align-items: center;
					font-family: Helvetica;
					font-size: 2.4vw;
					color: rgba(255,255,255,1);
				}
				#jddh5video_current_time,
				#jddh5video_duration_time{
					margin: 0 1vw;
				}
				
				/* 声音 */
				#jddh5video_controls .jddh5video_voice{
					display: flex;
					align-items: center;
					margin: 0 2vw 0 1vw;
				}
				.jddh5video_voice #jddh5video_mute,
				.jddh5video_voice #jddh5video_unmute {
					width: 8vw;
				}
				.jddh5video_voice #jddh5video_mute {
					display: none;
				}
				
				/* 全屏 */
				#jddh5video_controls .jddh5video_fullscreen{
					display: flex;
					align-items: center;
				}
				.jddh5video_fullscreen #jddh5video_fs {
					width: 8vw;
					display: none;
				}
				.jddh5video_fullscreen #jddh5video_fs_ext {
					width: 8vw;
				}
				
				/* fullscreen */
				html:-ms-fullscreen {
					width:100%;
				}
				#jddh5video_container:-webkit-full-screen {
					background-color:transparent;
				}
				/* hide controls on fullscreen with WebKit */
				video::-webkit-media-controls {
					display:none !important;
				}
				div[data-fullscreen=true] {
					width: 100%;
					position: relative;
					z-index: 1;
				}
				div[data-fullscreen=true] video {
					height:auto;
				}
				div[data-fullscreen=true] #jddh5video_controls{
					width: calc(100% - 8vw);
					position: absolute;
					bottom: 0.5rem;
					display: flex;
					justify-content: center;
					overflow: hidden;
					background: transparent;
					margin: 0 auto;
					z-index: 11;
				}
			</style>
		`;
		let videoStyle = document.createElement('div');
		videoStyle.innerHTML = styleVideo;
		document.getElementsByTagName('head')[0].appendChild(videoStyle.firstElementChild)

		/*------- 外部入参 -------*/ 
		let customControl // 默认显示自定义控件
		let scrollCollapse // 默认不显示视频折叠工具条
		let qiDianData // 奇点埋点数据

		/*------- 获取主要节点 -------*/ 
		let videoContainer
   	let video // video标签
   	let videoControls // 获取播放器自定义控件容器
		let initPlay // 初始化播放控件 
		let play // 播放控件
		let pause // 暂停控件
		let mute // 静音控件
		let unmute // 非静音控件
		let progressDur // 播放总长
   	let progressCur // 播放进度
		let progressBar // 进度按钮
		let current_time // 已播放时间
		let duration_time // 播放总时长
		let fullscreen // 全屏
		let extfullscreen // 退出全屏
		let videoMiniBar // 视频折叠工具条
		let closeMiniBtn // 关闭折叠工具条
		let videoPlayBtn // 播放折叠工具条
		let miniBarStatus // 折叠工具条滚动显示状态

		let ua = navigator.userAgent;
		let isAndroid = /((Android)|(Adr))/g.test(ua); // 是否在andriod环境
		let isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/g.test(ua); // 是否在IOS环境

   	// 设置video容器的全屏状态
  	let setFullscreenData = function(state) {
			videoContainer.setAttribute('data-fullscreen', !!state);
			if (!!state) {
				videoContainer.style.display = "flex";
				videoContainer.style.alignItems = "center"
				videoContainer.style.justifyContent = "center"
			} else {
				videoContainer.style.display = "block";
			}
  	}

  	// 检测document当前是否为全屏模式
   	let isFullScreen = function() {
   		return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
		}

		// 播放
		let handlePlay = function () {
			video.play()
			initPlay.style.display = 'none'
			// 显示用户自定义控件
			videoControls && (videoControls.style.display = 'flex')
			play && (play.style.display = 'none')
			pause && (pause.style.display = 'inline')
		}

		// 暂停
		let handlePause = function () {
			video.pause()
			play && (play.style.display = 'inline')
			pause && (pause.style.display = 'none')
		}

		// 静音
		let handleMute = function () {
			video.muted = false;
			mute && (mute.style.display = 'none')
			unmute && (unmute.style.display = 'inline')
		}

		// 声音
		let handleVoice = function () {
			video.muted = true;
			mute && (mute.style.display = 'inline')
			unmute && (unmute.style.display = 'none')
		}
		
   	// 全屏/退出全屏
   	let handleFullscreen = function() {
			if (isAndroid) {
				if (isFullScreen()) {
					// 退出全屏模式，只能作用在document对象上
					if (document.exitFullscreen) document.exitFullscreen();
					else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
					else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
					else if (document.msExitFullscreen) document.msExitFullscreen();
					fullscreen.style.display = 'none'
					extfullscreen.style.display = 'inline-block'
					video.style.width = '100%'
					video.style.height = 'auto'
					videoControls.style.width = 'calc(100% - 8vw)'
					setFullscreenData(false);

					// 退出全屏判断原生浏览器是否静音
					if (video.muted) {
						handleVoice()
					} else {
						handleMute()
					}
				} else {
					// 开启全屏模式，这个能够作用在document上，但是这里作用在video容器上，是为了确保自定义控件能够使用
					if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
					else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
					else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
					else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
					fullscreen.style.display = 'inline-block'
					extfullscreen.style.display = 'none'
					video.style.width = '100%'
					video.style.height = '100%'
					videoControls.style.width = '80%'
					setFullscreenData(true);
				}
			}
			// ios全屏
			if (isIos) {
				video.removeAttribute("playsinline")
				video.removeAttribute("webkit-playsinline")
				video.removeAttribute("x5-video-player-type")
				video.removeAttribute("x5-video-player-fullscreen")
				handlePause()
				handlePlay()
			}
		}

		// 奇点埋点
		let handleQiDian = function(data) {
			let init_Play = document.getElementById('jddh5video_init_play'); //视频初始化播放控件
			let closeMini_Btn = document.getElementById('jddh5video_closeMiniBtn');
			let	videoPlay_Btn = document.getElementById('jddh5video_videoPlayBtn');

			let playStart = data.playStart
			let collapseClose = data.collapseClose
			let collapsePlay = data.collapsePlay

			// 初始播放按钮埋点
			if (playStart && customControl) {
				playStart.clstag && (init_Play.setAttribute("clstag", playStart.clstag))
				if (playStart.ext && Object.prototype.toString.call(playStart.ext) === '[object Object]') {
					init_Play.setAttribute("data-qidian-ext", JSON.stringify(playStart.ext))
				}
			}

			// 折叠条关闭按钮埋点
			if (collapseClose && scrollCollapse) {
				collapseClose.clstag && (closeMini_Btn.setAttribute("clstag", collapseClose.clstag))
				if (collapseClose.ext && Object.prototype.toString.call(collapseClose.ext) === '[object Object]') {
					closeMini_Btn.setAttribute("data-qidian-ext", JSON.stringify(collapseClose.ext))
				}
			}

			// 折叠条播放按钮埋点
			if (collapsePlay && scrollCollapse) {
				collapsePlay.clstag && (videoPlay_Btn.setAttribute("clstag", collapsePlay.clstag))
				if (collapsePlay.ext && Object.prototype.toString.call(collapsePlay.ext) === '[object Object]') {
					videoPlay_Btn.setAttribute("data-qidian-ext", JSON.stringify(collapsePlay.ext))
				}
			}
		}

		// 函数工具包
		let toollib = {
			/* 时间换算，时长（s）转换为 HH:MM:SS 或 MM:SS */
			handleTime: function (second) { 
				let hh = (second / 3600) >> 0; //把秒除得小时
				let mm = (second % 3600) / 60 >> 0; //把余数用于除得分钟
				let ss = (second % 3600) % 60 >> 0; //最后的余数直接就是秒钟
				let thh = hh < 10 ? "0" + hh : hh + "";
				let tmm = mm < 10 ? "0" + mm : mm + "";
				let tss = ss < 10 ? "0" + ss : ss + "";
				if (hh) {
					return thh + ":" + tmm + ":" + tss;
				} else {
					return tmm + ":" + tss;
				}
			},
			/* 获取视频文件类型 */
			getVideoSourceType: function (filePath) {
				let index= filePath.lastIndexOf(".");
				let ext = filePath.substr(index+1);
				return ext;
			}
		}

		// 初始化播放器
		let createVideoDom = function (data) {

			// 获取h5视屏播放器容器元素
			videoContainer = document.getElementById('jddh5video_container');
			videoContainer.setAttribute("data-fullscreen", "false")

			// video标签
			let sourceList = data.sourceList // 视频资源数组
			let poster = data.poster
			let initVideo = document.createElement('video')
			initVideo.setAttribute("id", "jddh5video")
			initVideo.setAttribute("preload", "metadata")
			initVideo.setAttribute("poster", poster)
			initVideo.setAttribute("x5-video-player-type", "h5")
			initVideo.setAttribute("x5-video-player-fullscreen", "true")
			initVideo.setAttribute("x5-playsinline", "")
			initVideo.setAttribute("playsinline", "")
			initVideo.setAttribute("webkit-playsinline", "")
			initVideo.setAttribute("width", "300")
			sourceList.map((source, index) => {
				let sourceEle = document.createElement("source")
				sourceEle.setAttribute("src", source)
				sourceEle.setAttribute("type", `video/${toollib.getVideoSourceType(source)}`)
				initVideo.appendChild(sourceEle)
			})
			videoContainer.appendChild(initVideo)

			if (!customControl && isAndroid || customControl) {
				// 初始播放按钮
				let initPlayBtn = document.createElement('img')
				initPlayBtn.setAttribute("id", "jddh5video_init_play")
				initPlayBtn.setAttribute("src", imageBase64.play_big)
				videoContainer.appendChild(initPlayBtn)
			}
			
			// 是否创建自定义控件
			if (customControl) {
				// 自定义控件
				let customControls = document.createElement('div')
				customControls.setAttribute("id", "jddh5video_controls")
				// 播放暂停控件
				let playPause = document.createElement('div')
				playPause.setAttribute("class", "jddh5video_playpause")
				let playBtn = document.createElement("img")
				playBtn.setAttribute("id", "jddh5video_play")
				playBtn.setAttribute("src", imageBase64.play)
				playBtn.setAttribute("style", "width: 8vw;")
				let pauseBtn = document.createElement("img")
				pauseBtn.setAttribute("id", "jddh5video_pause")
				pauseBtn.setAttribute("src", imageBase64.pause)
				pauseBtn.setAttribute("style", "width: 8vw;display: none;")
				playPause.appendChild(playBtn)
				playPause.appendChild(pauseBtn)
				// 添加播放暂停控件
				customControls.appendChild(playPause)

				// 进度条控件
				let progressControl = document.createElement('div')
				progressControl.setAttribute("class", "jddh5video_progress")
				// 进度条
				let progressRate = document.createElement('div')
				progressRate.setAttribute("class", "jddh5video_progress_rate")
				let progressDur = document.createElement('img')
				progressDur.setAttribute("id", "jddh5video_progress_dur")
				progressDur.setAttribute("src", imageBase64.progress_dur)
				progressRate.appendChild(progressDur)
				let progressCur = document.createElement('img')
				progressCur.setAttribute("id", "jddh5video_progress_cur")
				progressCur.setAttribute("src", imageBase64.progress_cur)
				progressRate.appendChild(progressCur)
				let progressBarBox = document.createElement('div')
				progressBarBox.setAttribute("id", "jddh5video_progress_bar_box")
				let progressBar = document.createElement('img')
				progressBar.setAttribute("id", "jddh5video_progress_bar")
				progressBar.setAttribute("src", imageBase64.progress_bar)
				progressBarBox.appendChild(progressBar)
				progressRate.appendChild(progressBarBox)
				// 时间
				let progressTime = document.createElement('div')
				progressTime.setAttribute("class", "jddh5video_progress_time")
				let currentTime = document.createElement('span')
				currentTime.setAttribute("id", "jddh5video_current_time")
				progressTime.appendChild(currentTime)
				let line = document.createElement('span')
				line.innerHTML = "/"
				progressTime.appendChild(line)
				let durationTime = document.createElement('span')
				durationTime.setAttribute("id", "jddh5video_duration_time")
				progressTime.appendChild(durationTime)
				progressControl.appendChild(progressRate)
				progressControl.appendChild(progressTime)
				// 添加进度条控件
				customControls.appendChild(progressControl)

				// 静音控件
				let voiceControl = document.createElement('div')
				voiceControl.setAttribute("class", "jddh5video_voice")
				let voiceMute = document.createElement('img')
				voiceMute.setAttribute("id", "jddh5video_mute")
				voiceMute.setAttribute("src", imageBase64.mute)
				voiceControl.appendChild(voiceMute)
				let voiceUnMute = document.createElement('img')
				voiceUnMute.setAttribute("id", "jddh5video_unmute")
				voiceUnMute.setAttribute("src", imageBase64.unmute)
				voiceControl.appendChild(voiceUnMute)
				// 添加静音控件
				customControls.appendChild(voiceControl)

				// 全屏控件
				let fullScreenControl = document.createElement('div')
				fullScreenControl.setAttribute("class", "jddh5video_fullscreen")
				// 进入全屏
				let fullScreenBtn = document.createElement('img')
				fullScreenBtn.setAttribute("id", "jddh5video_fs")
				fullScreenBtn.setAttribute("src", imageBase64.fullscreen)
				// 退出全屏
				let extfullScreenBtn = document.createElement('img')
				extfullScreenBtn.setAttribute("id", "jddh5video_fs_ext")
				extfullScreenBtn.setAttribute("src", imageBase64.extfullscreen)

				fullScreenControl.appendChild(fullScreenBtn)
				fullScreenControl.appendChild(extfullScreenBtn)
				// 全屏控件
				customControls.appendChild(fullScreenControl)

				// 自定义控件加入播放器
				videoContainer.appendChild(customControls)
			}
			
			// 是否创建折叠视频
			if (scrollCollapse) {
				// 折叠工具条样式注入
				let styleMiniBar = `
					<style>
						#jddh5video_minibar{
							position: fixed;
							top: 10px;
							display: none;
							align-items: center;
							justify-content: space-between;
							width: calc(100% - 12.8vw);
							margin: 0 6.4vw;
							background-color: #EFF3FF;
							border-radius: 1.6vw;
						}
						.minibar_content{
							display: flex;
						}
						.minibar_content .minibar_poster {
							width: 20vw;
							height: 44px;
							border-radius: 1.6vw;
							box-shadow: 5px 5px 15px 0px rgba(0,4,86,0.24);
						}
						.minibar_content .minibar_info {
							width: 30vw;
							display: flex;
							flex-direction: column;
							justify-content: center;
							margin-left: 5vw;
						}
						.minibar_content .minibar_title{
							font-family: PingFangSC-Semibold;
							font-weight: bold;
							font-size: 2.4vw;
							color: rgba(51,51,51,1);
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.minibar_content .minibar_specification{
							width: 17vw;
							margin: 0.1rem 0;
						}
						.minibar_btns{
							display: flex;
							align-items: center;
						}
						#jddh5video_closeMiniBtn{
							width: 3vw;
							margin-right: 6vw;
						}
						#jddh5video_videoPlayBtn{
							margin-right: 6vw;
							border-radius: 50px;
							background: rgba(51,87,224,1);
							display: flex;
							align-items: center;
							justify-content: center;
						}
						#jddh5video_videoPlayBtn img{
							width: 6vw;
						}
					</style>
				`
				let miniBarStyle = document.createElement('div');
				miniBarStyle.innerHTML = styleMiniBar;
				document.getElementsByTagName('head')[0].appendChild(miniBarStyle.firstElementChild)

				// 初始视频折叠工具条
				let videoMiniBarContainer = document.createElement('div')
				videoMiniBarContainer.setAttribute("id", "jddh5video_minibar")
				if (data.banner && data.banner.bgColor) {
					videoMiniBarContainer.style.backgroundColor = data.banner.bgColor
				}

				// 工具条内容
				let miniBarContent = document.createElement('div')
				miniBarContent.setAttribute("class", "minibar_content")

				// 封面图标
				if (data.poster) {
					let miniBarPoster = document.createElement('img')
					miniBarPoster.setAttribute("class", "minibar_poster")
					miniBarPoster.setAttribute("src", data.poster)
					miniBarContent.appendChild(miniBarPoster)
				}

				// 信息部分
				let miniBarInfo = document.createElement("div")
				miniBarInfo.setAttribute("class", "minibar_info")

				// title
				let miniBarTitle = document.createElement("span")
				miniBarTitle.setAttribute("class", "minibar_title")
				if (data.banner && data.banner.title) {
					miniBarTitle.innerHTML = data.banner.title
				}
				miniBarInfo.appendChild(miniBarTitle)

				// icon
				if (data.banner && data.banner.icon) {
					let minibarSpecification = document.createElement("img")
					minibarSpecification.setAttribute("class", "minibar_specification")
					minibarSpecification.setAttribute("src", imageBase64.specification)
					miniBarInfo.appendChild(minibarSpecification)
				}

				// 添加至工具条容器
				miniBarContent.appendChild(miniBarInfo)
				videoMiniBarContainer.appendChild(miniBarContent)

				// 工具条按钮
				let miniBarBtns = document.createElement("div")
				miniBarBtns.setAttribute("class", "minibar_btns")

				// 关闭按钮
				let closeMiniBtn = document.createElement("img")
				closeMiniBtn.setAttribute("id", "jddh5video_closeMiniBtn")
				closeMiniBtn.setAttribute("src", imageBase64.close)
				miniBarBtns.appendChild(closeMiniBtn)

				// 播放按钮
				let videoPlayBtn = document.createElement("div")
				videoPlayBtn.setAttribute("id", "jddh5video_videoPlayBtn")
				let videoMiniPlayBtn = document.createElement("img")
				videoMiniPlayBtn.setAttribute("src", imageBase64.play)
				if (data.banner && data.banner.btnBgColor) {
					videoPlayBtn.style.backgroundColor = data.banner.btnBgColor
				}
				videoPlayBtn.appendChild(videoMiniPlayBtn)

				// 添加至工具条容器
				miniBarBtns.appendChild(videoPlayBtn)
				videoMiniBarContainer.appendChild(miniBarBtns)

				// 注入页面
				window.document.body.appendChild(videoMiniBarContainer);
			}

			// 奇点埋点
			if (qiDianData) {
				handleQiDian(qiDianData)
			}

			// 播放器创建成功后触发回调
			if (data.callback && Object.prototype.toString.call(data.callback) === '[object Function]') {
				data.callback(initVideo)
			}
			
		}

		// 获取播放器节点
		let getPlayerDom = function (data) {
			video = document.getElementById('jddh5video'); // 获取video标签

			if (!customControl && isAndroid || customControl) {
				initPlay = document.getElementById('jddh5video_init_play'); //视频初始化播放控件
			}

			if (customControl) {
				// 获取播放器自定义控件容器
				videoControls = document.getElementById('jddh5video_controls');
				// 隐藏浏览器控件
				video.controls = false;
				// 获取自定义控件按钮
				play = document.getElementById('jddh5video_play'); // 播放控件
				pause = document.getElementById('jddh5video_pause'); // 暂停控件
				mute = document.getElementById('jddh5video_mute'); // 静音控件
				unmute = document.getElementById('jddh5video_unmute'); // 非静音控件
				progressDur = document.getElementById('jddh5video_progress_dur'); // 播放总长
				progressCur = document.getElementById('jddh5video_progress_cur'); // 播放进度
				progressBar = document.getElementById('jddh5video_progress_bar_box'); // 进度按钮
				current_time = document.getElementById('jddh5video_current_time'); // 已播放时间
				duration_time = document.getElementById('jddh5video_duration_time'); // 播放总时长
				fullscreen = document.getElementById('jddh5video_fs'); // 全屏
				extfullscreen = document.getElementById('jddh5video_fs_ext'); // 退出全屏

				// 检测浏览器是否支持全屏模式
				let fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
				// 如果浏览器不支持全屏模式，则隐藏全屏按钮
				if (!fullScreenEnabled && isAndroid) {
					fullscreen.style.display = 'none';
					extfullscreen.style.display = 'none'
				}

			} else {
				// 显示浏览器控件
				video.controls = true;
				video.setAttribute("controls", "controls")
			}

			// 是否需要滚动折叠
			if (scrollCollapse) {
				videoMiniBar = document.getElementById('jddh5video_minibar');
				closeMiniBtn = document.getElementById('jddh5video_closeMiniBtn');
				videoPlayBtn = document.getElementById('jddh5video_videoPlayBtn');
			}
		}

		// 绑定事件
		let bindEventListener = function (data) {
			// 如果浏览器支持addEventListener，则用该方法绑定事件 (IE8以下不支持)
			if (document.addEventListener) {

				if (!customControl && isAndroid || customControl) {
					// 视频初始化播放事件
					initPlay.addEventListener('click', function() {
						handlePlay()
						mute && (mute.style.display = 'none')
						unmute && (unmute.style.display = 'inline')
					});
				}

				if (customControl) {
					// 等待video的媒体数据加载完成后, 再将视频的时长设置为进度条的最大值
					video.addEventListener('loadedmetadata', function() {
						duration_time.innerHTML = toollib.handleTime(video.duration)
						current_time.innerHTML = toollib.handleTime(video.currentTime)
					});
					// 点击video显示隐藏控件
					video.addEventListener('click', function() {
						if (video.currentTime) {
							let status = videoControls.style.display
							if (status === 'flex') {
								videoControls.style.display = 'none'
							} else {
								videoControls.style.display = 'flex'
							}
						}
					});
					// 播放事件
					play.addEventListener('click', function(e) {
						handlePlay()
					});
					// 暂停事件
					pause.addEventListener('click', function(e) {
						handlePause()
					});
					// 静音事件
					mute.addEventListener('click', function(e) {
						handleMute()
					});
					// 声音事件
					unmute.addEventListener('click', function(e) {
						handleVoice()
					});
					// 当视频播放时，更新进度条
					video.addEventListener('timeupdate', function() {
						let rate = Math.floor((video.currentTime / video.duration) * 100) + '%'
						progressCur.style.width = rate;
						progressBar.style.left = `calc(${rate} - 3.6vw)`
						duration_time.innerHTML = toollib.handleTime(video.duration)
						current_time.innerHTML = toollib.handleTime(video.currentTime)
						if (rate === '100%') {
							play.style.display = 'inline'
							pause.style.display = 'none'
							// 视频播放结束触发回调
							if (data.playEndCallBack && Object.prototype.toString.call(data.playEndCallBack) === '[object Function]') {
								data.playEndCallBack(video)
							}
						}
					});
					// 进度条开始拖动
					progressBar.addEventListener('touchstart', function (e) {
						handlePause()
					})
					// 进度条拖动中
					progressBar.addEventListener('touchmove', function (e) {
						let progressDurClientWidth = progressDur.clientWidth // 进度条总宽度
						let videoControlsOffsetLeft = videoControls.offsetLeft // 自定义控件容器距离可视区左侧距离
						let playParentElementClientWidth = play.parentElement.clientWidth // 播放按钮宽度
						let progressDurParentElementMarginLeft = 3.2 / (100 / document.documentElement.clientWidth) // 进度条左侧margin
						let barClientX = e.touches[0].clientX // 距离页面可视区左侧拖动位置
						let dragLength = barClientX - videoControlsOffsetLeft - playParentElementClientWidth - progressDurParentElementMarginLeft // 拖动长度

						let rate // 拖动比例
						if (dragLength <= 0) {
							rate = '0'
						} else if (dragLength >= progressDurClientWidth) {
							rate = '100'
						} else if (dragLength > 0 && dragLength < progressDurClientWidth) {
							rate = Math.floor((dragLength / progressDurClientWidth) * 100)
						}

						progressCur.style.width = rate + '%';
						progressBar.style.left = `calc(${rate}% - 3.6vw)`
						duration_time.innerHTML = toollib.handleTime(video.duration)
						current_time.innerHTML = toollib.handleTime(video.currentTime)
						video.currentTime = video.duration * Number(rate) * 0.01
						
					})
					// 进度条拖动结束
					progressBar.addEventListener('touchend', function (e) {
						if (video.currentTime === video.duration) {
							handlePause()
						} else {
							handlePlay()
						}
					})
				
					// 全屏事件
					fullscreen.addEventListener('click', function(e) {
						handleFullscreen();
					});
					// 退出全屏
					extfullscreen.addEventListener('click', function() {
						handleFullscreen()
					});
					// 监听全屏切换事件
					document.addEventListener('fullscreenchange', function(e) {
						console.log('fullscreenchange')
						setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
					});
					document.addEventListener('webkitfullscreenchange', function() {
						console.log('webkitfullscreenchange')
						setFullscreenData(!!document.webkitIsFullScreen);
					});
					document.addEventListener('mozfullscreenchange', function() {
						console.log('mozfullscreenchange')
						setFullscreenData(!!document.mozFullScreen);
					});
					document.addEventListener('msfullscreenchange', function() {
						console.log('msfullscreenchange')
						setFullscreenData(!!document.msFullscreenElement);
					});
					// ios进入全屏
					video.addEventListener('webkitbeginfullscreen', function () {
						console.log('webkitbeginfullscreen...')
					});
					// ios退出全屏
					video.addEventListener('webkitendfullscreen', function (e) {
						if (isIos) {
							video.setAttribute("playsinline", "")
							video.setAttribute("webkit-playsinline", "")
							video.setAttribute("x5-video-player-type", "h5")
							video.setAttribute("x5-video-player-fullscreen", "true")
							// 退出全屏切换图标
							fullscreen.style.display = 'none'
							extfullscreen.style.display = 'inline-block'
							
							setTimeout(function() {
								handlePause()
								handlePlay()
							}, 500)

							// 退出全屏判断原生浏览器是否静音
							if (video.muted) {
								handleVoice()
							} else {
								handleMute()
							}
						}
					});
					// 微信浏览器进入全屏
					video.addEventListener('x5videoenterfullscreen', function () {
						console.log('x5videoenterfullscreen....')
					});
					// 微信浏览器退出全屏
					video.addEventListener('x5videoexitfullscreen', function () {
						setTimeout(function() {
							handlePause()
							handlePlay()
						}, 500)

						// 退出全屏判断原生浏览器是否静音
						if (video.muted) {
							handleVoice()
						} else {
							handleMute()
						}
						// 退出全屏切换图标
						fullscreen.style.display = 'none'
						extfullscreen.style.display = 'inline-block'
					});
				}
				
				if (scrollCollapse) {
					// 监听页面滚动
					document.addEventListener('scroll', function () {
						const videoPlace = videoContainer.offsetTop + videoContainer.offsetHeight
						let scrollDistance = window.pageYOffset - 20
						if (scrollDistance > videoPlace) {
							if (videoMiniBar.style.display !== 'flex' && miniBarStatus === 'show') {
								videoMiniBar.style.display = 'flex'
								handlePause()
							}
						} else {
							miniBarStatus = 'show'
							if (videoMiniBar.style.display !== 'none') {
								videoMiniBar.style.display = 'none'
							}
						}
					});
					// 折叠工具条播放按钮
					videoPlayBtn.addEventListener('click', function () {
						window.scrollTo(0, 0)
						handlePlay()
					});
					// 折叠工具条关闭按钮
					closeMiniBtn.addEventListener('click', function () {
						videoMiniBar.style.display = 'none'
						miniBarStatus = 'hidden'
					});
				}

				// 监听页面是否活跃
				document.addEventListener("visibilitychange", function(e) {
					handlePause()
				});
			}
		}
		
		/*---------------------------------------------- API --------------------------------------------*/
		let JDDH5VideoPlayer = function () {
			let videoAPI = {
				InitH5Video: function (data) {
					// 默认显示自定义控件
					customControl = data.control === 'undefined' ? true : Boolean(data.control)
					// 默认不显示视频折叠工具条
					scrollCollapse = data.collapse === 'undefined' ? false : Boolean(data.collapse)
					// 奇点埋点数据
					qiDianData = data.qidian
					createVideoDom(data)
					getPlayerDom(data)
					bindEventListener(data)
				}
			}
			return {
				InitH5Video: videoAPI.InitH5Video.bind(videoAPI)
			}
		}
		
		global.JDDH5VideoPlayer = JDDH5VideoPlayer()
  }

})(typeof window !== 'undefined' ? window : this);