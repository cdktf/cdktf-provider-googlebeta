# `googleComputeRouterNat` Submodule <a name="`googleComputeRouterNat` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterNat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterNat <a name="GoogleComputeRouterNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat google_compute_router_nat}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNat(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  router: str,
  source_subnetwork_ip_ranges_to_nat: str,
  auto_network_tier: str = None,
  drain_nat_ips: typing.List[str] = None,
  enable_dynamic_port_allocation: typing.Union[bool, IResolvable] = None,
  enable_endpoint_independent_mapping: typing.Union[bool, IResolvable] = None,
  endpoint_types: typing.List[str] = None,
  icmp_idle_timeout_sec: typing.Union[int, float] = None,
  id: str = None,
  initial_nat_ips: typing.List[str] = None,
  log_config: GoogleComputeRouterNatLogConfig = None,
  max_ports_per_vm: typing.Union[int, float] = None,
  min_ports_per_vm: typing.Union[int, float] = None,
  nat_ip_allocate_option: str = None,
  nat_ips: typing.List[str] = None,
  project: str = None,
  region: str = None,
  rules: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatRules]] = None,
  subnetwork: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatSubnetwork]] = None,
  tcp_established_idle_timeout_sec: typing.Union[int, float] = None,
  tcp_time_wait_timeout_sec: typing.Union[int, float] = None,
  tcp_transitory_idle_timeout_sec: typing.Union[int, float] = None,
  timeouts: GoogleComputeRouterNatTimeouts = None,
  type: str = None,
  udp_idle_timeout_sec: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.router">router</a></code> | <code>str</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.sourceSubnetworkIpRangesToNat">source_subnetwork_ip_ranges_to_nat</a></code> | <code>str</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.autoNetworkTier">auto_network_tier</a></code> | <code>str</code> | The network tier to use when automatically reserving NAT IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.drainNatIps">drain_nat_ips</a></code> | <code>typing.List[str]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.enableDynamicPortAllocation">enable_dynamic_port_allocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.enableEndpointIndependentMapping">enable_endpoint_independent_mapping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.endpointTypes">endpoint_types</a></code> | <code>typing.List[str]</code> | Specifies the endpoint Types supported by the NAT Gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.icmpIdleTimeoutSec">icmp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.initialNatIps">initial_nat_ips</a></code> | <code>typing.List[str]</code> | Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.maxPortsPerVm">max_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.minPortsPerVm">min_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.natIpAllocateOption">nat_ip_allocate_option</a></code> | <code>str</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.natIps">nat_ips</a></code> | <code>typing.List[str]</code> | Self-links of NAT IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]]</code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.tcpEstablishedIdleTimeoutSec">tcp_established_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.tcpTimeWaitTimeoutSec">tcp_time_wait_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.tcpTransitoryIdleTimeoutSec">tcp_transitory_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.type">type</a></code> | <code>str</code> | Indicates whether this NAT is used for public or private IP translation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.udpIdleTimeoutSec">udp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.name"></a>

- *Type:* str

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#name GoogleComputeRouterNat#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.router"></a>

- *Type:* str

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#router GoogleComputeRouterNat#router}

---

##### `source_subnetwork_ip_ranges_to_nat`<sup>Required</sup> <a name="source_subnetwork_ip_ranges_to_nat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.sourceSubnetworkIpRangesToNat"></a>

- *Type:* str

How NAT should be configured per Subnetwork.

If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_subnetwork_ip_ranges_to_nat GoogleComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `auto_network_tier`<sup>Optional</sup> <a name="auto_network_tier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.autoNetworkTier"></a>

- *Type:* str

The network tier to use when automatically reserving NAT IP addresses.

Must be one of: PREMIUM, STANDARD. If not specified, then the current
project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#auto_network_tier GoogleComputeRouterNat#auto_network_tier}

---

##### `drain_nat_ips`<sup>Optional</sup> <a name="drain_nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.drainNatIps"></a>

- *Type:* typing.List[str]

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#drain_nat_ips GoogleComputeRouterNat#drain_nat_ips}

---

##### `enable_dynamic_port_allocation`<sup>Optional</sup> <a name="enable_dynamic_port_allocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.enableDynamicPortAllocation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#enable_dynamic_port_allocation GoogleComputeRouterNat#enable_dynamic_port_allocation}

---

##### `enable_endpoint_independent_mapping`<sup>Optional</sup> <a name="enable_endpoint_independent_mapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.enableEndpointIndependentMapping"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#enable_endpoint_independent_mapping GoogleComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `endpoint_types`<sup>Optional</sup> <a name="endpoint_types" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.endpointTypes"></a>

- *Type:* typing.List[str]

Specifies the endpoint Types supported by the NAT Gateway.

Supported values include:
'ENDPOINT_TYPE_VM', 'ENDPOINT_TYPE_SWG',
'ENDPOINT_TYPE_MANAGED_PROXY_LB'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#endpoint_types GoogleComputeRouterNat#endpoint_types}

---

##### `icmp_idle_timeout_sec`<sup>Optional</sup> <a name="icmp_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.icmpIdleTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#icmp_idle_timeout_sec GoogleComputeRouterNat#icmp_idle_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_nat_ips`<sup>Optional</sup> <a name="initial_nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.initialNatIps"></a>

- *Type:* typing.List[str]

Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource.

Conflicts with natIps and drainNatIps. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#initial_nat_ips GoogleComputeRouterNat#initial_nat_ips}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#log_config GoogleComputeRouterNat#log_config}

---

##### `max_ports_per_vm`<sup>Optional</sup> <a name="max_ports_per_vm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.maxPortsPerVm"></a>

- *Type:* typing.Union[int, float]

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#max_ports_per_vm GoogleComputeRouterNat#max_ports_per_vm}

---

##### `min_ports_per_vm`<sup>Optional</sup> <a name="min_ports_per_vm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.minPortsPerVm"></a>

- *Type:* typing.Union[int, float]

Minimum number of ports allocated to a VM from this NAT.

Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#min_ports_per_vm GoogleComputeRouterNat#min_ports_per_vm}

---

##### `nat_ip_allocate_option`<sup>Optional</sup> <a name="nat_ip_allocate_option" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.natIpAllocateOption"></a>

- *Type:* str

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#nat_ip_allocate_option GoogleComputeRouterNat#nat_ip_allocate_option}

---

##### `nat_ips`<sup>Optional</sup> <a name="nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.natIps"></a>

- *Type:* typing.List[str]

Self-links of NAT IPs.

Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
If this field is used alongside with a count created list of address resources 'google_compute_address.foobar.*.self_link',
the access level resource for the address resource must have a 'lifecycle' block with 'create_before_destroy = true' so
the number of resources can be increased/decreased without triggering the 'resourceInUseByAnotherResource' error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#nat_ips GoogleComputeRouterNat#nat_ips}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.region"></a>

- *Type:* str

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#region GoogleComputeRouterNat#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#rules GoogleComputeRouterNat#rules}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.subnetwork"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]]

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#subnetwork GoogleComputeRouterNat#subnetwork}

---

##### `tcp_established_idle_timeout_sec`<sup>Optional</sup> <a name="tcp_established_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.tcpEstablishedIdleTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#tcp_established_idle_timeout_sec GoogleComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `tcp_time_wait_timeout_sec`<sup>Optional</sup> <a name="tcp_time_wait_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.tcpTimeWaitTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#tcp_time_wait_timeout_sec GoogleComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `tcp_transitory_idle_timeout_sec`<sup>Optional</sup> <a name="tcp_transitory_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.tcpTransitoryIdleTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#tcp_transitory_idle_timeout_sec GoogleComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#timeouts GoogleComputeRouterNat#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.type"></a>

- *Type:* str

Indicates whether this NAT is used for public or private IP translation.

If unspecified, it defaults to PUBLIC.
If 'PUBLIC' NAT used for public IP translation.
If 'PRIVATE' NAT used for private IP translation. Default value: "PUBLIC" Possible values: ["PUBLIC", "PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#type GoogleComputeRouterNat#type}

---

##### `udp_idle_timeout_sec`<sup>Optional</sup> <a name="udp_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.udpIdleTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#udp_idle_timeout_sec GoogleComputeRouterNat#udp_idle_timeout_sec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork">put_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetAutoNetworkTier">reset_auto_network_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetDrainNatIps">reset_drain_nat_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableDynamicPortAllocation">reset_enable_dynamic_port_allocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableEndpointIndependentMapping">reset_enable_endpoint_independent_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEndpointTypes">reset_endpoint_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetIcmpIdleTimeoutSec">reset_icmp_idle_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetInitialNatIps">reset_initial_nat_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMaxPortsPerVm">reset_max_ports_per_vm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMinPortsPerVm">reset_min_ports_per_vm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIpAllocateOption">reset_nat_ip_allocate_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIps">reset_nat_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpEstablishedIdleTimeoutSec">reset_tcp_established_idle_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTimeWaitTimeoutSec">reset_tcp_time_wait_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTransitoryIdleTimeoutSec">reset_tcp_transitory_idle_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetUdpIdleTimeoutSec">reset_udp_idle_timeout_sec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig"></a>

```python
def put_log_config(
  enable: typing.Union[bool, IResolvable],
  filter: str
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#enable GoogleComputeRouterNat#enable}

---

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig.parameter.filter"></a>

- *Type:* str

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#filter GoogleComputeRouterNat#filter}

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]]

---

##### `put_subnetwork` <a name="put_subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork"></a>

```python
def put_subnetwork(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatSubnetwork]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#create GoogleComputeRouterNat#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#delete GoogleComputeRouterNat#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#update GoogleComputeRouterNat#update}.

---

##### `reset_auto_network_tier` <a name="reset_auto_network_tier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetAutoNetworkTier"></a>

```python
def reset_auto_network_tier() -> None
```

##### `reset_drain_nat_ips` <a name="reset_drain_nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetDrainNatIps"></a>

```python
def reset_drain_nat_ips() -> None
```

##### `reset_enable_dynamic_port_allocation` <a name="reset_enable_dynamic_port_allocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableDynamicPortAllocation"></a>

```python
def reset_enable_dynamic_port_allocation() -> None
```

##### `reset_enable_endpoint_independent_mapping` <a name="reset_enable_endpoint_independent_mapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableEndpointIndependentMapping"></a>

```python
def reset_enable_endpoint_independent_mapping() -> None
```

##### `reset_endpoint_types` <a name="reset_endpoint_types" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEndpointTypes"></a>

```python
def reset_endpoint_types() -> None
```

##### `reset_icmp_idle_timeout_sec` <a name="reset_icmp_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetIcmpIdleTimeoutSec"></a>

```python
def reset_icmp_idle_timeout_sec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_nat_ips` <a name="reset_initial_nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetInitialNatIps"></a>

```python
def reset_initial_nat_ips() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_max_ports_per_vm` <a name="reset_max_ports_per_vm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMaxPortsPerVm"></a>

```python
def reset_max_ports_per_vm() -> None
```

##### `reset_min_ports_per_vm` <a name="reset_min_ports_per_vm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMinPortsPerVm"></a>

```python
def reset_min_ports_per_vm() -> None
```

##### `reset_nat_ip_allocate_option` <a name="reset_nat_ip_allocate_option" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIpAllocateOption"></a>

```python
def reset_nat_ip_allocate_option() -> None
```

##### `reset_nat_ips` <a name="reset_nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIps"></a>

```python
def reset_nat_ips() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_tcp_established_idle_timeout_sec` <a name="reset_tcp_established_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpEstablishedIdleTimeoutSec"></a>

```python
def reset_tcp_established_idle_timeout_sec() -> None
```

##### `reset_tcp_time_wait_timeout_sec` <a name="reset_tcp_time_wait_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTimeWaitTimeoutSec"></a>

```python
def reset_tcp_time_wait_timeout_sec() -> None
```

##### `reset_tcp_transitory_idle_timeout_sec` <a name="reset_tcp_transitory_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTransitoryIdleTimeoutSec"></a>

```python
def reset_tcp_transitory_idle_timeout_sec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_udp_idle_timeout_sec` <a name="reset_udp_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetUdpIdleTimeoutSec"></a>

```python
def reset_udp_idle_timeout_sec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRouterNat resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNat.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNat.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNat.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNat.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRouterNat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRouterNat to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRouterNat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterNat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference">GoogleComputeRouterNatLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList">GoogleComputeRouterNatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetwork">subnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList">GoogleComputeRouterNatSubnetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference">GoogleComputeRouterNatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTierInput">auto_network_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIpsInput">drain_nat_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocationInput">enable_dynamic_port_allocation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMappingInput">enable_endpoint_independent_mapping_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypesInput">endpoint_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSecInput">icmp_idle_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIpsInput">initial_nat_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVmInput">max_ports_per_vm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVmInput">min_ports_per_vm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOptionInput">nat_ip_allocate_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpsInput">nat_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.routerInput">router_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput">source_subnetwork_ip_ranges_to_nat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetworkInput">subnetwork_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput">tcp_established_idle_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSecInput">tcp_time_wait_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput">tcp_transitory_idle_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSecInput">udp_idle_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTier">auto_network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIps">drain_nat_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocation">enable_dynamic_port_allocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMapping">enable_endpoint_independent_mapping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypes">endpoint_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSec">icmp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIps">initial_nat_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVm">max_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVm">min_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOption">nat_ip_allocate_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIps">nat_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.router">router</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat">source_subnetwork_ip_ranges_to_nat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec">tcp_established_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec">tcp_time_wait_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec">tcp_transitory_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSec">udp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfig"></a>

```python
log_config: GoogleComputeRouterNatLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference">GoogleComputeRouterNatLogConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rules"></a>

```python
rules: GoogleComputeRouterNatRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList">GoogleComputeRouterNatRulesList</a>

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetwork"></a>

```python
subnetwork: GoogleComputeRouterNatSubnetworkList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList">GoogleComputeRouterNatSubnetworkList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeouts"></a>

```python
timeouts: GoogleComputeRouterNatTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference">GoogleComputeRouterNatTimeoutsOutputReference</a>

---

##### `auto_network_tier_input`<sup>Optional</sup> <a name="auto_network_tier_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTierInput"></a>

```python
auto_network_tier_input: str
```

- *Type:* str

---

##### `drain_nat_ips_input`<sup>Optional</sup> <a name="drain_nat_ips_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIpsInput"></a>

```python
drain_nat_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_dynamic_port_allocation_input`<sup>Optional</sup> <a name="enable_dynamic_port_allocation_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocationInput"></a>

```python
enable_dynamic_port_allocation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_endpoint_independent_mapping_input`<sup>Optional</sup> <a name="enable_endpoint_independent_mapping_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMappingInput"></a>

```python
enable_endpoint_independent_mapping_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_types_input`<sup>Optional</sup> <a name="endpoint_types_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypesInput"></a>

```python
endpoint_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `icmp_idle_timeout_sec_input`<sup>Optional</sup> <a name="icmp_idle_timeout_sec_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSecInput"></a>

```python
icmp_idle_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_nat_ips_input`<sup>Optional</sup> <a name="initial_nat_ips_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIpsInput"></a>

```python
initial_nat_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfigInput"></a>

```python
log_config_input: GoogleComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---

##### `max_ports_per_vm_input`<sup>Optional</sup> <a name="max_ports_per_vm_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVmInput"></a>

```python
max_ports_per_vm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ports_per_vm_input`<sup>Optional</sup> <a name="min_ports_per_vm_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVmInput"></a>

```python
min_ports_per_vm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nat_ip_allocate_option_input`<sup>Optional</sup> <a name="nat_ip_allocate_option_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOptionInput"></a>

```python
nat_ip_allocate_option_input: str
```

- *Type:* str

---

##### `nat_ips_input`<sup>Optional</sup> <a name="nat_ips_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpsInput"></a>

```python
nat_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.routerInput"></a>

```python
router_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]]

---

##### `source_subnetwork_ip_ranges_to_nat_input`<sup>Optional</sup> <a name="source_subnetwork_ip_ranges_to_nat_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput"></a>

```python
source_subnetwork_ip_ranges_to_nat_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetworkInput"></a>

```python
subnetwork_input: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatSubnetwork]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]]

---

##### `tcp_established_idle_timeout_sec_input`<sup>Optional</sup> <a name="tcp_established_idle_timeout_sec_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput"></a>

```python
tcp_established_idle_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_time_wait_timeout_sec_input`<sup>Optional</sup> <a name="tcp_time_wait_timeout_sec_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSecInput"></a>

```python
tcp_time_wait_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_transitory_idle_timeout_sec_input`<sup>Optional</sup> <a name="tcp_transitory_idle_timeout_sec_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput"></a>

```python
tcp_transitory_idle_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRouterNatTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `udp_idle_timeout_sec_input`<sup>Optional</sup> <a name="udp_idle_timeout_sec_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSecInput"></a>

```python
udp_idle_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_network_tier`<sup>Required</sup> <a name="auto_network_tier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTier"></a>

```python
auto_network_tier: str
```

- *Type:* str

---

##### `drain_nat_ips`<sup>Required</sup> <a name="drain_nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIps"></a>

```python
drain_nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_dynamic_port_allocation`<sup>Required</sup> <a name="enable_dynamic_port_allocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocation"></a>

```python
enable_dynamic_port_allocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_endpoint_independent_mapping`<sup>Required</sup> <a name="enable_endpoint_independent_mapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMapping"></a>

```python
enable_endpoint_independent_mapping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_types`<sup>Required</sup> <a name="endpoint_types" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypes"></a>

```python
endpoint_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `icmp_idle_timeout_sec`<sup>Required</sup> <a name="icmp_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSec"></a>

```python
icmp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_nat_ips`<sup>Required</sup> <a name="initial_nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIps"></a>

```python
initial_nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_ports_per_vm`<sup>Required</sup> <a name="max_ports_per_vm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVm"></a>

```python
max_ports_per_vm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ports_per_vm`<sup>Required</sup> <a name="min_ports_per_vm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVm"></a>

```python
min_ports_per_vm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nat_ip_allocate_option`<sup>Required</sup> <a name="nat_ip_allocate_option" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOption"></a>

```python
nat_ip_allocate_option: str
```

- *Type:* str

---

##### `nat_ips`<sup>Required</sup> <a name="nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIps"></a>

```python
nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.router"></a>

```python
router: str
```

- *Type:* str

---

##### `source_subnetwork_ip_ranges_to_nat`<sup>Required</sup> <a name="source_subnetwork_ip_ranges_to_nat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat"></a>

```python
source_subnetwork_ip_ranges_to_nat: str
```

- *Type:* str

---

##### `tcp_established_idle_timeout_sec`<sup>Required</sup> <a name="tcp_established_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec"></a>

```python
tcp_established_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_time_wait_timeout_sec`<sup>Required</sup> <a name="tcp_time_wait_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec"></a>

```python
tcp_time_wait_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_transitory_idle_timeout_sec`<sup>Required</sup> <a name="tcp_transitory_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec"></a>

```python
tcp_transitory_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `udp_idle_timeout_sec`<sup>Required</sup> <a name="udp_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSec"></a>

```python
udp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterNatConfig <a name="GoogleComputeRouterNatConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  router: str,
  source_subnetwork_ip_ranges_to_nat: str,
  auto_network_tier: str = None,
  drain_nat_ips: typing.List[str] = None,
  enable_dynamic_port_allocation: typing.Union[bool, IResolvable] = None,
  enable_endpoint_independent_mapping: typing.Union[bool, IResolvable] = None,
  endpoint_types: typing.List[str] = None,
  icmp_idle_timeout_sec: typing.Union[int, float] = None,
  id: str = None,
  initial_nat_ips: typing.List[str] = None,
  log_config: GoogleComputeRouterNatLogConfig = None,
  max_ports_per_vm: typing.Union[int, float] = None,
  min_ports_per_vm: typing.Union[int, float] = None,
  nat_ip_allocate_option: str = None,
  nat_ips: typing.List[str] = None,
  project: str = None,
  region: str = None,
  rules: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatRules]] = None,
  subnetwork: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatSubnetwork]] = None,
  tcp_established_idle_timeout_sec: typing.Union[int, float] = None,
  tcp_time_wait_timeout_sec: typing.Union[int, float] = None,
  tcp_transitory_idle_timeout_sec: typing.Union[int, float] = None,
  timeouts: GoogleComputeRouterNatTimeouts = None,
  type: str = None,
  udp_idle_timeout_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.name">name</a></code> | <code>str</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.router">router</a></code> | <code>str</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat">source_subnetwork_ip_ranges_to_nat</a></code> | <code>str</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.autoNetworkTier">auto_network_tier</a></code> | <code>str</code> | The network tier to use when automatically reserving NAT IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.drainNatIps">drain_nat_ips</a></code> | <code>typing.List[str]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableDynamicPortAllocation">enable_dynamic_port_allocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableEndpointIndependentMapping">enable_endpoint_independent_mapping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.endpointTypes">endpoint_types</a></code> | <code>typing.List[str]</code> | Specifies the endpoint Types supported by the NAT Gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.icmpIdleTimeoutSec">icmp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.initialNatIps">initial_nat_ips</a></code> | <code>typing.List[str]</code> | Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.maxPortsPerVm">max_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.minPortsPerVm">min_ports_per_vm</a></code> | <code>typing.Union[int, float]</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIpAllocateOption">nat_ip_allocate_option</a></code> | <code>str</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIps">nat_ips</a></code> | <code>typing.List[str]</code> | Self-links of NAT IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.region">region</a></code> | <code>str</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.subnetwork">subnetwork</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]]</code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec">tcp_established_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec">tcp_time_wait_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec">tcp_transitory_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.type">type</a></code> | <code>str</code> | Indicates whether this NAT is used for public or private IP translation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.udpIdleTimeoutSec">udp_idle_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#name GoogleComputeRouterNat#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.router"></a>

```python
router: str
```

- *Type:* str

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#router GoogleComputeRouterNat#router}

---

##### `source_subnetwork_ip_ranges_to_nat`<sup>Required</sup> <a name="source_subnetwork_ip_ranges_to_nat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat"></a>

```python
source_subnetwork_ip_ranges_to_nat: str
```

- *Type:* str

How NAT should be configured per Subnetwork.

If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_subnetwork_ip_ranges_to_nat GoogleComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `auto_network_tier`<sup>Optional</sup> <a name="auto_network_tier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.autoNetworkTier"></a>

```python
auto_network_tier: str
```

- *Type:* str

The network tier to use when automatically reserving NAT IP addresses.

Must be one of: PREMIUM, STANDARD. If not specified, then the current
project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#auto_network_tier GoogleComputeRouterNat#auto_network_tier}

---

##### `drain_nat_ips`<sup>Optional</sup> <a name="drain_nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.drainNatIps"></a>

```python
drain_nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#drain_nat_ips GoogleComputeRouterNat#drain_nat_ips}

---

##### `enable_dynamic_port_allocation`<sup>Optional</sup> <a name="enable_dynamic_port_allocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableDynamicPortAllocation"></a>

```python
enable_dynamic_port_allocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#enable_dynamic_port_allocation GoogleComputeRouterNat#enable_dynamic_port_allocation}

---

##### `enable_endpoint_independent_mapping`<sup>Optional</sup> <a name="enable_endpoint_independent_mapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableEndpointIndependentMapping"></a>

```python
enable_endpoint_independent_mapping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#enable_endpoint_independent_mapping GoogleComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `endpoint_types`<sup>Optional</sup> <a name="endpoint_types" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.endpointTypes"></a>

```python
endpoint_types: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the endpoint Types supported by the NAT Gateway.

Supported values include:
'ENDPOINT_TYPE_VM', 'ENDPOINT_TYPE_SWG',
'ENDPOINT_TYPE_MANAGED_PROXY_LB'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#endpoint_types GoogleComputeRouterNat#endpoint_types}

---

##### `icmp_idle_timeout_sec`<sup>Optional</sup> <a name="icmp_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.icmpIdleTimeoutSec"></a>

```python
icmp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#icmp_idle_timeout_sec GoogleComputeRouterNat#icmp_idle_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_nat_ips`<sup>Optional</sup> <a name="initial_nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.initialNatIps"></a>

```python
initial_nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource.

Conflicts with natIps and drainNatIps. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#initial_nat_ips GoogleComputeRouterNat#initial_nat_ips}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.logConfig"></a>

```python
log_config: GoogleComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#log_config GoogleComputeRouterNat#log_config}

---

##### `max_ports_per_vm`<sup>Optional</sup> <a name="max_ports_per_vm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.maxPortsPerVm"></a>

```python
max_ports_per_vm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#max_ports_per_vm GoogleComputeRouterNat#max_ports_per_vm}

---

##### `min_ports_per_vm`<sup>Optional</sup> <a name="min_ports_per_vm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.minPortsPerVm"></a>

```python
min_ports_per_vm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of ports allocated to a VM from this NAT.

Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#min_ports_per_vm GoogleComputeRouterNat#min_ports_per_vm}

---

##### `nat_ip_allocate_option`<sup>Optional</sup> <a name="nat_ip_allocate_option" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIpAllocateOption"></a>

```python
nat_ip_allocate_option: str
```

- *Type:* str

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#nat_ip_allocate_option GoogleComputeRouterNat#nat_ip_allocate_option}

---

##### `nat_ips`<sup>Optional</sup> <a name="nat_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIps"></a>

```python
nat_ips: typing.List[str]
```

- *Type:* typing.List[str]

Self-links of NAT IPs.

Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
If this field is used alongside with a count created list of address resources 'google_compute_address.foobar.*.self_link',
the access level resource for the address resource must have a 'lifecycle' block with 'create_before_destroy = true' so
the number of resources can be increased/decreased without triggering the 'resourceInUseByAnotherResource' error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#nat_ips GoogleComputeRouterNat#nat_ips}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#region GoogleComputeRouterNat#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#rules GoogleComputeRouterNat#rules}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.subnetwork"></a>

```python
subnetwork: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatSubnetwork]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]]

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#subnetwork GoogleComputeRouterNat#subnetwork}

---

##### `tcp_established_idle_timeout_sec`<sup>Optional</sup> <a name="tcp_established_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec"></a>

```python
tcp_established_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#tcp_established_idle_timeout_sec GoogleComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `tcp_time_wait_timeout_sec`<sup>Optional</sup> <a name="tcp_time_wait_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec"></a>

```python
tcp_time_wait_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#tcp_time_wait_timeout_sec GoogleComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `tcp_transitory_idle_timeout_sec`<sup>Optional</sup> <a name="tcp_transitory_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec"></a>

```python
tcp_transitory_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#tcp_transitory_idle_timeout_sec GoogleComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRouterNatTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#timeouts GoogleComputeRouterNat#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Indicates whether this NAT is used for public or private IP translation.

If unspecified, it defaults to PUBLIC.
If 'PUBLIC' NAT used for public IP translation.
If 'PRIVATE' NAT used for private IP translation. Default value: "PUBLIC" Possible values: ["PUBLIC", "PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#type GoogleComputeRouterNat#type}

---

##### `udp_idle_timeout_sec`<sup>Optional</sup> <a name="udp_idle_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.udpIdleTimeoutSec"></a>

```python
udp_idle_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#udp_idle_timeout_sec GoogleComputeRouterNat#udp_idle_timeout_sec}

---

### GoogleComputeRouterNatLogConfig <a name="GoogleComputeRouterNatLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatLogConfig(
  enable: typing.Union[bool, IResolvable],
  filter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to export logs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.filter">filter</a></code> | <code>str</code> | Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#enable GoogleComputeRouterNat#enable}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#filter GoogleComputeRouterNat#filter}

---

### GoogleComputeRouterNatRules <a name="GoogleComputeRouterNatRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatRules(
  match: str,
  rule_number: typing.Union[int, float],
  action: GoogleComputeRouterNatRulesAction = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.match">match</a></code> | <code>str</code> | CEL expression that specifies the match condition that egress traffic from a VM is evaluated against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | An integer uniquely identifying a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.description">description</a></code> | <code>str</code> | An optional description of this rule. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.match"></a>

```python
match: str
```

- *Type:* str

CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.

If it evaluates to true, the corresponding action is enforced.

The following examples are valid match expressions for public NAT:

"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"

"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"

The following example is a valid match expression for private NAT:

"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#match GoogleComputeRouterNat#match}

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer uniquely identifying a rule in the list.

The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#rule_number GoogleComputeRouterNat#rule_number}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.action"></a>

```python
action: GoogleComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#action GoogleComputeRouterNat#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#description GoogleComputeRouterNat#description}

---

### GoogleComputeRouterNatRulesAction <a name="GoogleComputeRouterNatRulesAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatRulesAction(
  source_nat_active_ips: typing.List[str] = None,
  source_nat_active_ranges: typing.List[str] = None,
  source_nat_drain_ips: typing.List[str] = None,
  source_nat_drain_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveIps">source_nat_active_ips</a></code> | <code>typing.List[str]</code> | A list of URLs of the IP resources used for this NAT rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveRanges">source_nat_active_ranges</a></code> | <code>typing.List[str]</code> | A list of URLs of the subnetworks used as source ranges for this NAT Rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainIps">source_nat_drain_ips</a></code> | <code>typing.List[str]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainRanges">source_nat_drain_ranges</a></code> | <code>typing.List[str]</code> | A list of URLs of subnetworks representing source ranges to be drained. |

---

##### `source_nat_active_ips`<sup>Optional</sup> <a name="source_nat_active_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveIps"></a>

```python
source_nat_active_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_nat_active_ips GoogleComputeRouterNat#source_nat_active_ips}

---

##### `source_nat_active_ranges`<sup>Optional</sup> <a name="source_nat_active_ranges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveRanges"></a>

```python
source_nat_active_ranges: typing.List[str]
```

- *Type:* typing.List[str]

A list of URLs of the subnetworks used as source ranges for this NAT Rule.

These subnetworks must have purpose set to PRIVATE_NAT.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_nat_active_ranges GoogleComputeRouterNat#source_nat_active_ranges}

---

##### `source_nat_drain_ips`<sup>Optional</sup> <a name="source_nat_drain_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainIps"></a>

```python
source_nat_drain_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_nat_drain_ips GoogleComputeRouterNat#source_nat_drain_ips}

---

##### `source_nat_drain_ranges`<sup>Optional</sup> <a name="source_nat_drain_ranges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainRanges"></a>

```python
source_nat_drain_ranges: typing.List[str]
```

- *Type:* typing.List[str]

A list of URLs of subnetworks representing source ranges to be drained.

This is only supported on patch/update, and these subnetworks must have previously been used as active ranges in this NAT Rule.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_nat_drain_ranges GoogleComputeRouterNat#source_nat_drain_ranges}

---

### GoogleComputeRouterNatSubnetwork <a name="GoogleComputeRouterNatSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatSubnetwork(
  name: str,
  source_ip_ranges_to_nat: typing.List[str],
  secondary_ip_range_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.name">name</a></code> | <code>str</code> | Self-link of subnetwork to NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.sourceIpRangesToNat">source_ip_ranges_to_nat</a></code> | <code>typing.List[str]</code> | List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.secondaryIpRangeNames">secondary_ip_range_names</a></code> | <code>typing.List[str]</code> | List of the secondary ranges of the subnetwork that are allowed to use NAT. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.name"></a>

```python
name: str
```

- *Type:* str

Self-link of subnetwork to NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#name GoogleComputeRouterNat#name}

---

##### `source_ip_ranges_to_nat`<sup>Required</sup> <a name="source_ip_ranges_to_nat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.sourceIpRangesToNat"></a>

```python
source_ip_ranges_to_nat: typing.List[str]
```

- *Type:* typing.List[str]

List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_ip_ranges_to_nat GoogleComputeRouterNat#source_ip_ranges_to_nat}

---

##### `secondary_ip_range_names`<sup>Optional</sup> <a name="secondary_ip_range_names" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.secondaryIpRangeNames"></a>

```python
secondary_ip_range_names: typing.List[str]
```

- *Type:* typing.List[str]

List of the secondary ranges of the subnetwork that are allowed to use NAT.

This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#secondary_ip_range_names GoogleComputeRouterNat#secondary_ip_range_names}

---

### GoogleComputeRouterNatTimeouts <a name="GoogleComputeRouterNatTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#create GoogleComputeRouterNat#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#delete GoogleComputeRouterNat#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#update GoogleComputeRouterNat#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#create GoogleComputeRouterNat#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#delete GoogleComputeRouterNat#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#update GoogleComputeRouterNat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterNatLogConfigOutputReference <a name="GoogleComputeRouterNatLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---


### GoogleComputeRouterNatRulesActionOutputReference <a name="GoogleComputeRouterNatRulesActionOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps">reset_source_nat_active_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveRanges">reset_source_nat_active_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps">reset_source_nat_drain_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainRanges">reset_source_nat_drain_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_nat_active_ips` <a name="reset_source_nat_active_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps"></a>

```python
def reset_source_nat_active_ips() -> None
```

##### `reset_source_nat_active_ranges` <a name="reset_source_nat_active_ranges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveRanges"></a>

```python
def reset_source_nat_active_ranges() -> None
```

##### `reset_source_nat_drain_ips` <a name="reset_source_nat_drain_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps"></a>

```python
def reset_source_nat_drain_ips() -> None
```

##### `reset_source_nat_drain_ranges` <a name="reset_source_nat_drain_ranges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainRanges"></a>

```python
def reset_source_nat_drain_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput">source_nat_active_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRangesInput">source_nat_active_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput">source_nat_drain_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRangesInput">source_nat_drain_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps">source_nat_active_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRanges">source_nat_active_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps">source_nat_drain_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRanges">source_nat_drain_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_nat_active_ips_input`<sup>Optional</sup> <a name="source_nat_active_ips_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput"></a>

```python
source_nat_active_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_active_ranges_input`<sup>Optional</sup> <a name="source_nat_active_ranges_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRangesInput"></a>

```python
source_nat_active_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_drain_ips_input`<sup>Optional</sup> <a name="source_nat_drain_ips_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput"></a>

```python
source_nat_drain_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_drain_ranges_input`<sup>Optional</sup> <a name="source_nat_drain_ranges_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRangesInput"></a>

```python
source_nat_drain_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_active_ips`<sup>Required</sup> <a name="source_nat_active_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps"></a>

```python
source_nat_active_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_active_ranges`<sup>Required</sup> <a name="source_nat_active_ranges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRanges"></a>

```python
source_nat_active_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_drain_ips`<sup>Required</sup> <a name="source_nat_drain_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps"></a>

```python
source_nat_drain_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_nat_drain_ranges`<sup>Required</sup> <a name="source_nat_drain_ranges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRanges"></a>

```python
source_nat_drain_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---


### GoogleComputeRouterNatRulesList <a name="GoogleComputeRouterNatRulesList" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRouterNatRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]]

---


### GoogleComputeRouterNatRulesOutputReference <a name="GoogleComputeRouterNatRulesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction"></a>

```python
def put_action(
  source_nat_active_ips: typing.List[str] = None,
  source_nat_active_ranges: typing.List[str] = None,
  source_nat_drain_ips: typing.List[str] = None,
  source_nat_drain_ranges: typing.List[str] = None
) -> None
```

###### `source_nat_active_ips`<sup>Optional</sup> <a name="source_nat_active_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction.parameter.sourceNatActiveIps"></a>

- *Type:* typing.List[str]

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_nat_active_ips GoogleComputeRouterNat#source_nat_active_ips}

---

###### `source_nat_active_ranges`<sup>Optional</sup> <a name="source_nat_active_ranges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction.parameter.sourceNatActiveRanges"></a>

- *Type:* typing.List[str]

A list of URLs of the subnetworks used as source ranges for this NAT Rule.

These subnetworks must have purpose set to PRIVATE_NAT.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_nat_active_ranges GoogleComputeRouterNat#source_nat_active_ranges}

---

###### `source_nat_drain_ips`<sup>Optional</sup> <a name="source_nat_drain_ips" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction.parameter.sourceNatDrainIps"></a>

- *Type:* typing.List[str]

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_nat_drain_ips GoogleComputeRouterNat#source_nat_drain_ips}

---

###### `source_nat_drain_ranges`<sup>Optional</sup> <a name="source_nat_drain_ranges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction.parameter.sourceNatDrainRanges"></a>

- *Type:* typing.List[str]

A list of URLs of subnetworks representing source ranges to be drained.

This is only supported on patch/update, and these subnetworks must have previously been used as active ranges in this NAT Rule.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_nat#source_nat_drain_ranges GoogleComputeRouterNat#source_nat_drain_ranges}

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference">GoogleComputeRouterNatRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.matchInput">match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumberInput">rule_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.match">match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.action"></a>

```python
action: GoogleComputeRouterNatRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference">GoogleComputeRouterNatRulesActionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.actionInput"></a>

```python
action_input: GoogleComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.matchInput"></a>

```python
match_input: str
```

- *Type:* str

---

##### `rule_number_input`<sup>Optional</sup> <a name="rule_number_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumberInput"></a>

```python
rule_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.match"></a>

```python
match: str
```

- *Type:* str

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouterNatRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>]

---


### GoogleComputeRouterNatSubnetworkList <a name="GoogleComputeRouterNatSubnetworkList" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRouterNatSubnetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRouterNatSubnetwork]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]]

---


### GoogleComputeRouterNatSubnetworkOutputReference <a name="GoogleComputeRouterNatSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames">reset_secondary_ip_range_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secondary_ip_range_names` <a name="reset_secondary_ip_range_names" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames"></a>

```python
def reset_secondary_ip_range_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput">secondary_ip_range_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput">source_ip_ranges_to_nat_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames">secondary_ip_range_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat">source_ip_ranges_to_nat</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secondary_ip_range_names_input`<sup>Optional</sup> <a name="secondary_ip_range_names_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput"></a>

```python
secondary_ip_range_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_ranges_to_nat_input`<sup>Optional</sup> <a name="source_ip_ranges_to_nat_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput"></a>

```python
source_ip_ranges_to_nat_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secondary_ip_range_names`<sup>Required</sup> <a name="secondary_ip_range_names" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames"></a>

```python
secondary_ip_range_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_ranges_to_nat`<sup>Required</sup> <a name="source_ip_ranges_to_nat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat"></a>

```python
source_ip_ranges_to_nat: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouterNatSubnetwork]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>]

---


### GoogleComputeRouterNatTimeoutsOutputReference <a name="GoogleComputeRouterNatTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_nat

googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouterNatTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>]

---



