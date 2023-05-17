# `google_compute_global_forwarding_rule`

Refer to the Terraform Registory for docs: [`google_compute_global_forwarding_rule`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule).

# `googleComputeGlobalForwardingRule` Submodule <a name="`googleComputeGlobalForwardingRule` Submodule" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeGlobalForwardingRule <a name="GoogleComputeGlobalForwardingRule" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule google_compute_global_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRule;

GoogleComputeGlobalForwardingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .target(java.lang.String)
//  .allowPscGlobalAccess(java.lang.Boolean)
//  .allowPscGlobalAccess(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .ipProtocol(java.lang.String)
//  .ipVersion(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingScheme(java.lang.String)
//  .metadataFilters(IResolvable)
//  .metadataFilters(java.util.List<GoogleComputeGlobalForwardingRuleMetadataFilters>)
//  .network(java.lang.String)
//  .portRange(java.lang.String)
//  .project(java.lang.String)
//  .sourceIpRanges(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeGlobalForwardingRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#id GoogleComputeGlobalForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.metadataFilters">metadataFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a>></code> | metadata_filters block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.portRange">portRange</a></code> | <code>java.lang.String</code> | This field can only be used:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#project GoogleComputeGlobalForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.sourceIpRanges">sourceIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts">GoogleComputeGlobalForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#name GoogleComputeGlobalForwardingRule#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.target"></a>

- *Type:* java.lang.String

The URL of the target resource to receive the matched traffic.

For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.

The forwarded traffic must be of a type appropriate to the target object.
For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
'vpc-sc' - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
'all-apis' - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).

For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#target GoogleComputeGlobalForwardingRule#target}

---

##### `allowPscGlobalAccess`<sup>Optional</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.allowPscGlobalAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#allow_psc_global_access GoogleComputeGlobalForwardingRule#allow_psc_global_access}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#description GoogleComputeGlobalForwardingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#id GoogleComputeGlobalForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.ipAddress"></a>

- *Type:* java.lang.String

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target'.

While creating a forwarding rule, specifying an 'IPAddress' is
required under the following circumstances:

When the 'target' is set to 'targetGrpcProxy' and
'validateForProxyless' is set to 'true', the
'IPAddress' should be set to '0.0.0.0'.
When the 'target' is a Private Service Connect Google APIs
bundle, you must specify an 'IPAddress'.

Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.

Use one of the following formats to specify an IP address while creating a
forwarding rule:

IP address number, as in '100.1.2.3'
IPv6 address range, as in '2600:1234::/96'
Full resource URL, as in
'https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name'
Partial URL or by name, as in:
'projects/project_id/regions/region/addresses/address-name'
'regions/region/addresses/address-name'
'global/addresses/address-name'
'address-name'

The forwarding rule's 'target',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#ip_address GoogleComputeGlobalForwardingRule#ip_address}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.ipProtocol"></a>

- *Type:* java.lang.String

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends). Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#ip_protocol GoogleComputeGlobalForwardingRule#ip_protocol}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.String

The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#ip_version GoogleComputeGlobalForwardingRule#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this forwarding rule.  A list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#labels GoogleComputeGlobalForwardingRule#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* java.lang.String

Specifies the forwarding rule type.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#load_balancing_scheme GoogleComputeGlobalForwardingRule#load_balancing_scheme}

---

##### `metadataFilters`<sup>Optional</sup> <a name="metadataFilters" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.metadataFilters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a>>

metadata_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#metadata_filters GoogleComputeGlobalForwardingRule#metadata_filters}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.network"></a>

- *Type:* java.lang.String

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#network GoogleComputeGlobalForwardingRule#network}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.portRange"></a>

- *Type:* java.lang.String

This field can only be used:.

If 'IPProtocol' is one of TCP, UDP, or SCTP.
By backend service-based network load balancers, target pool-based
network load balancers, internal proxy load balancers, external proxy load
balancers, Traffic Director, external protocol forwarding, and Classic VPN.
Some products have restrictions on what ports can be used. See
[port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
for details.

TargetHttpProxy: 80, 8080
TargetHttpsProxy: 443
TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995,
1883, 5222
TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995,
1883, 5222
TargetVpnGateway: 500, 4500

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#port_range GoogleComputeGlobalForwardingRule#port_range}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#project GoogleComputeGlobalForwardingRule#project}.

---

##### `sourceIpRanges`<sup>Optional</sup> <a name="sourceIpRanges" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.sourceIpRanges"></a>

- *Type:* java.util.List<java.lang.String>

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#source_ip_ranges GoogleComputeGlobalForwardingRule#source_ip_ranges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts">GoogleComputeGlobalForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#timeouts GoogleComputeGlobalForwardingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.putMetadataFilters">putMetadataFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetAllowPscGlobalAccess">resetAllowPscGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetMetadataFilters">resetMetadataFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetPortRange">resetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetSourceIpRanges">resetSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadataFilters` <a name="putMetadataFilters" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.putMetadataFilters"></a>

```java
public void putMetadataFilters(IResolvable OR java.util.List<GoogleComputeGlobalForwardingRuleMetadataFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.putMetadataFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeGlobalForwardingRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts">GoogleComputeGlobalForwardingRuleTimeouts</a>

---

##### `resetAllowPscGlobalAccess` <a name="resetAllowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetAllowPscGlobalAccess"></a>

```java
public void resetAllowPscGlobalAccess()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetIpProtocol"></a>

```java
public void resetIpProtocol()
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetLoadBalancingScheme"></a>

```java
public void resetLoadBalancingScheme()
```

##### `resetMetadataFilters` <a name="resetMetadataFilters" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetMetadataFilters"></a>

```java
public void resetMetadataFilters()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetPortRange"></a>

```java
public void resetPortRange()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetSourceIpRanges` <a name="resetSourceIpRanges" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetSourceIpRanges"></a>

```java
public void resetSourceIpRanges()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRule;

GoogleComputeGlobalForwardingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRule;

GoogleComputeGlobalForwardingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRule;

GoogleComputeGlobalForwardingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.baseForwardingRule">baseForwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.metadataFilters">metadataFilters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList">GoogleComputeGlobalForwardingRuleMetadataFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference">GoogleComputeGlobalForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.allowPscGlobalAccessInput">allowPscGlobalAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.metadataFiltersInput">metadataFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.portRangeInput">portRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.sourceIpRangesInput">sourceIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts">GoogleComputeGlobalForwardingRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.portRange">portRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.sourceIpRanges">sourceIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseForwardingRule`<sup>Required</sup> <a name="baseForwardingRule" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.baseForwardingRule"></a>

```java
public java.lang.String getBaseForwardingRule();
```

- *Type:* java.lang.String

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `metadataFilters`<sup>Required</sup> <a name="metadataFilters" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.metadataFilters"></a>

```java
public GoogleComputeGlobalForwardingRuleMetadataFiltersList getMetadataFilters();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList">GoogleComputeGlobalForwardingRuleMetadataFiltersList</a>

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.pscConnectionStatus"></a>

```java
public java.lang.String getPscConnectionStatus();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.timeouts"></a>

```java
public GoogleComputeGlobalForwardingRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference">GoogleComputeGlobalForwardingRuleTimeoutsOutputReference</a>

---

##### `allowPscGlobalAccessInput`<sup>Optional</sup> <a name="allowPscGlobalAccessInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.allowPscGlobalAccessInput"></a>

```java
public java.lang.Object getAllowPscGlobalAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipVersionInput"></a>

```java
public java.lang.String getIpVersionInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `metadataFiltersInput`<sup>Optional</sup> <a name="metadataFiltersInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.metadataFiltersInput"></a>

```java
public java.lang.Object getMetadataFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.portRangeInput"></a>

```java
public java.lang.String getPortRangeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sourceIpRangesInput`<sup>Optional</sup> <a name="sourceIpRangesInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.sourceIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSourceIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts">GoogleComputeGlobalForwardingRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `allowPscGlobalAccess`<sup>Required</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.allowPscGlobalAccess"></a>

```java
public java.lang.Object getAllowPscGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.sourceIpRanges"></a>

```java
public java.util.List<java.lang.String> getSourceIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeGlobalForwardingRuleConfig <a name="GoogleComputeGlobalForwardingRuleConfig" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRuleConfig;

GoogleComputeGlobalForwardingRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .target(java.lang.String)
//  .allowPscGlobalAccess(java.lang.Boolean)
//  .allowPscGlobalAccess(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .ipProtocol(java.lang.String)
//  .ipVersion(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingScheme(java.lang.String)
//  .metadataFilters(IResolvable)
//  .metadataFilters(java.util.List<GoogleComputeGlobalForwardingRuleMetadataFilters>)
//  .network(java.lang.String)
//  .portRange(java.lang.String)
//  .project(java.lang.String)
//  .sourceIpRanges(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeGlobalForwardingRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.target">target</a></code> | <code>java.lang.String</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#id GoogleComputeGlobalForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.metadataFilters">metadataFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a>></code> | metadata_filters block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.network">network</a></code> | <code>java.lang.String</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.portRange">portRange</a></code> | <code>java.lang.String</code> | This field can only be used:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#project GoogleComputeGlobalForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.sourceIpRanges">sourceIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts">GoogleComputeGlobalForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#name GoogleComputeGlobalForwardingRule#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The URL of the target resource to receive the matched traffic.

For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.

The forwarded traffic must be of a type appropriate to the target object.
For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
'vpc-sc' - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
'all-apis' - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).

For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#target GoogleComputeGlobalForwardingRule#target}

---

##### `allowPscGlobalAccess`<sup>Optional</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.allowPscGlobalAccess"></a>

```java
public java.lang.Object getAllowPscGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#allow_psc_global_access GoogleComputeGlobalForwardingRule#allow_psc_global_access}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#description GoogleComputeGlobalForwardingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#id GoogleComputeGlobalForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target'.

While creating a forwarding rule, specifying an 'IPAddress' is
required under the following circumstances:

When the 'target' is set to 'targetGrpcProxy' and
'validateForProxyless' is set to 'true', the
'IPAddress' should be set to '0.0.0.0'.
When the 'target' is a Private Service Connect Google APIs
bundle, you must specify an 'IPAddress'.

Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.

Use one of the following formats to specify an IP address while creating a
forwarding rule:

IP address number, as in '100.1.2.3'
IPv6 address range, as in '2600:1234::/96'
Full resource URL, as in
'https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name'
Partial URL or by name, as in:
'projects/project_id/regions/region/addresses/address-name'
'regions/region/addresses/address-name'
'global/addresses/address-name'
'address-name'

The forwarding rule's 'target',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#ip_address GoogleComputeGlobalForwardingRule#ip_address}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends). Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#ip_protocol GoogleComputeGlobalForwardingRule#ip_protocol}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#ip_version GoogleComputeGlobalForwardingRule#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this forwarding rule.  A list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#labels GoogleComputeGlobalForwardingRule#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

Specifies the forwarding rule type.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#load_balancing_scheme GoogleComputeGlobalForwardingRule#load_balancing_scheme}

---

##### `metadataFilters`<sup>Optional</sup> <a name="metadataFilters" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.metadataFilters"></a>

```java
public java.lang.Object getMetadataFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a>>

metadata_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#metadata_filters GoogleComputeGlobalForwardingRule#metadata_filters}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#network GoogleComputeGlobalForwardingRule#network}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

This field can only be used:.

If 'IPProtocol' is one of TCP, UDP, or SCTP.
By backend service-based network load balancers, target pool-based
network load balancers, internal proxy load balancers, external proxy load
balancers, Traffic Director, external protocol forwarding, and Classic VPN.
Some products have restrictions on what ports can be used. See
[port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
for details.

TargetHttpProxy: 80, 8080
TargetHttpsProxy: 443
TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995,
1883, 5222
TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995,
1883, 5222
TargetVpnGateway: 500, 4500

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#port_range GoogleComputeGlobalForwardingRule#port_range}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#project GoogleComputeGlobalForwardingRule#project}.

---

##### `sourceIpRanges`<sup>Optional</sup> <a name="sourceIpRanges" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.sourceIpRanges"></a>

```java
public java.util.List<java.lang.String> getSourceIpRanges();
```

- *Type:* java.util.List<java.lang.String>

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#source_ip_ranges GoogleComputeGlobalForwardingRule#source_ip_ranges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleConfig.property.timeouts"></a>

```java
public GoogleComputeGlobalForwardingRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts">GoogleComputeGlobalForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#timeouts GoogleComputeGlobalForwardingRule#timeouts}

---

### GoogleComputeGlobalForwardingRuleMetadataFilters <a name="GoogleComputeGlobalForwardingRuleMetadataFilters" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRuleMetadataFilters;

GoogleComputeGlobalForwardingRuleMetadataFilters.builder()
    .filterLabels(IResolvable)
    .filterLabels(java.util.List<GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels>)
    .filterMatchCriteria(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters.property.filterLabels">filterLabels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>></code> | filter_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters.property.filterMatchCriteria">filterMatchCriteria</a></code> | <code>java.lang.String</code> | Specifies how individual filterLabel matches within the list of filterLabels contribute towards the overall metadataFilter match. |

---

##### `filterLabels`<sup>Required</sup> <a name="filterLabels" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters.property.filterLabels"></a>

```java
public java.lang.Object getFilterLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>>

filter_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#filter_labels GoogleComputeGlobalForwardingRule#filter_labels}

---

##### `filterMatchCriteria`<sup>Required</sup> <a name="filterMatchCriteria" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters.property.filterMatchCriteria"></a>

```java
public java.lang.String getFilterMatchCriteria();
```

- *Type:* java.lang.String

Specifies how individual filterLabel matches within the list of filterLabels contribute towards the overall metadataFilter match.

MATCH_ANY - At least one of the filterLabels must have a matching
label in the provided metadata.
MATCH_ALL - All filterLabels must have matching labels in the
provided metadata. Possible values: ["MATCH_ANY", "MATCH_ALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#filter_match_criteria GoogleComputeGlobalForwardingRule#filter_match_criteria}

---

### GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels <a name="GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels;

GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.name">name</a></code> | <code>java.lang.String</code> | Name of the metadata label. The length must be between 1 and 1024 characters, inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.value">value</a></code> | <code>java.lang.String</code> | The value that the label must match. The value has a maximum length of 1024 characters. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the metadata label. The length must be between 1 and 1024 characters, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#name GoogleComputeGlobalForwardingRule#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value that the label must match. The value has a maximum length of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#value GoogleComputeGlobalForwardingRule#value}

---

### GoogleComputeGlobalForwardingRuleTimeouts <a name="GoogleComputeGlobalForwardingRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRuleTimeouts;

GoogleComputeGlobalForwardingRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#create GoogleComputeGlobalForwardingRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#delete GoogleComputeGlobalForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#update GoogleComputeGlobalForwardingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#create GoogleComputeGlobalForwardingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#delete GoogleComputeGlobalForwardingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_compute_global_forwarding_rule#update GoogleComputeGlobalForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList <a name="GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList;

new GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get"></a>

```java
public GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>>

---


### GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference <a name="GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference;

new GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleComputeGlobalForwardingRuleMetadataFiltersList <a name="GoogleComputeGlobalForwardingRuleMetadataFiltersList" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRuleMetadataFiltersList;

new GoogleComputeGlobalForwardingRuleMetadataFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.get"></a>

```java
public GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a>>

---


### GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference <a name="GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference;

new GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.putFilterLabels">putFilterLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterLabels` <a name="putFilterLabels" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.putFilterLabels"></a>

```java
public void putFilterLabels(IResolvable OR java.util.List<GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.putFilterLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels">filterLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabelsInput">filterLabelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteriaInput">filterMatchCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria">filterMatchCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterLabels`<sup>Required</sup> <a name="filterLabels" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels"></a>

```java
public GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList getFilterLabels();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a>

---

##### `filterLabelsInput`<sup>Optional</sup> <a name="filterLabelsInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabelsInput"></a>

```java
public java.lang.Object getFilterLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">GoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>>

---

##### `filterMatchCriteriaInput`<sup>Optional</sup> <a name="filterMatchCriteriaInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteriaInput"></a>

```java
public java.lang.String getFilterMatchCriteriaInput();
```

- *Type:* java.lang.String

---

##### `filterMatchCriteria`<sup>Required</sup> <a name="filterMatchCriteria" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria"></a>

```java
public java.lang.String getFilterMatchCriteria();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleMetadataFilters">GoogleComputeGlobalForwardingRuleMetadataFilters</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleComputeGlobalForwardingRuleTimeoutsOutputReference <a name="GoogleComputeGlobalForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_global_forwarding_rule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference;

new GoogleComputeGlobalForwardingRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts">GoogleComputeGlobalForwardingRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRuleTimeouts">GoogleComputeGlobalForwardingRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



