# `google_compute_network_endpoint`

Refer to the Terraform Registory for docs: [`google_compute_network_endpoint`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint).

# `googleComputeNetworkEndpoint` Submodule <a name="`googleComputeNetworkEndpoint` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkEndpoint <a name="GoogleComputeNetworkEndpoint" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint google_compute_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenetworkendpoint"

googlecomputenetworkendpoint.NewGoogleComputeNetworkEndpoint(scope Construct, id *string, config GoogleComputeNetworkEndpointConfig) GoogleComputeNetworkEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig">GoogleComputeNetworkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig">GoogleComputeNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeNetworkEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts">GoogleComputeNetworkEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetInstance"></a>

```go
func ResetInstance()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenetworkendpoint"

googlecomputenetworkendpoint.GoogleComputeNetworkEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenetworkendpoint"

googlecomputenetworkendpoint.GoogleComputeNetworkEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenetworkendpoint"

googlecomputenetworkendpoint.GoogleComputeNetworkEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference">GoogleComputeNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.networkEndpointGroupInput">NetworkEndpointGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.networkEndpointGroup">NetworkEndpointGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.timeouts"></a>

```go
func Timeouts() GoogleComputeNetworkEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference">GoogleComputeNetworkEndpointTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NetworkEndpointGroupInput`<sup>Optional</sup> <a name="NetworkEndpointGroupInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.networkEndpointGroupInput"></a>

```go
func NetworkEndpointGroupInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `NetworkEndpointGroup`<sup>Required</sup> <a name="NetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.networkEndpointGroup"></a>

```go
func NetworkEndpointGroup() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkEndpointConfig <a name="GoogleComputeNetworkEndpointConfig" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenetworkendpoint"

&googlecomputenetworkendpoint.GoogleComputeNetworkEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpAddress: *string,
	NetworkEndpointGroup: *string,
	Id: *string,
	Instance: *string,
	Port: *f64,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | IPv4 address of network endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.networkEndpointGroup">NetworkEndpointGroup</a></code> | <code>*string</code> | The network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#id GoogleComputeNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.instance">Instance</a></code> | <code>*string</code> | The name for a specific VM instance that the IP address belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.port">Port</a></code> | <code>*f64</code> | Port number of network endpoint. *Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#project GoogleComputeNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts">GoogleComputeNetworkEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone where the containing network endpoint group is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

IPv4 address of network endpoint.

The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#ip_address GoogleComputeNetworkEndpoint#ip_address}

---

##### `NetworkEndpointGroup`<sup>Required</sup> <a name="NetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.networkEndpointGroup"></a>

```go
NetworkEndpointGroup *string
```

- *Type:* *string

The network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#network_endpoint_group GoogleComputeNetworkEndpoint#network_endpoint_group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#id GoogleComputeNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The name for a specific VM instance that the IP address belongs to.

This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#instance GoogleComputeNetworkEndpoint#instance}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number of network endpoint. *Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#port GoogleComputeNetworkEndpoint#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#project GoogleComputeNetworkEndpoint#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeNetworkEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts">GoogleComputeNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#timeouts GoogleComputeNetworkEndpoint#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone where the containing network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#zone GoogleComputeNetworkEndpoint#zone}

---

### GoogleComputeNetworkEndpointTimeouts <a name="GoogleComputeNetworkEndpointTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenetworkendpoint"

&googlecomputenetworkendpoint.GoogleComputeNetworkEndpointTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#create GoogleComputeNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#delete GoogleComputeNetworkEndpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#create GoogleComputeNetworkEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_network_endpoint#delete GoogleComputeNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkEndpointTimeoutsOutputReference <a name="GoogleComputeNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenetworkendpoint"

googlecomputenetworkendpoint.NewGoogleComputeNetworkEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNetworkEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkEndpoint.GoogleComputeNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



