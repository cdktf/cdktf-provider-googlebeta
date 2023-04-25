# `google_iap_tunnel_instance_iam_policy`

Refer to the Terraform Registory for docs: [`google_iap_tunnel_instance_iam_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy).

# `googleIapTunnelInstanceIamPolicy` Submodule <a name="`googleIapTunnelInstanceIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapTunnelInstanceIamPolicy <a name="GoogleIapTunnelInstanceIamPolicy" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy google_iap_tunnel_instance_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleiaptunnelinstanceiampolicy"

googleiaptunnelinstanceiampolicy.NewGoogleIapTunnelInstanceIamPolicy(scope Construct, id *string, config GoogleIapTunnelInstanceIamPolicyConfig) GoogleIapTunnelInstanceIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig">GoogleIapTunnelInstanceIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig">GoogleIapTunnelInstanceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleiaptunnelinstanceiampolicy"

googleiaptunnelinstanceiampolicy.GoogleIapTunnelInstanceIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleiaptunnelinstanceiampolicy"

googleiaptunnelinstanceiampolicy.GoogleIapTunnelInstanceIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleiaptunnelinstanceiampolicy"

googleiaptunnelinstanceiampolicy.GoogleIapTunnelInstanceIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapTunnelInstanceIamPolicyConfig <a name="GoogleIapTunnelInstanceIamPolicyConfig" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleiaptunnelinstanceiampolicy"

&googleiaptunnelinstanceiampolicy.GoogleIapTunnelInstanceIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Instance: *string,
	PolicyData: *string,
	Id: *string,
	Project: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.instance">Instance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#instance GoogleIapTunnelInstanceIamPolicy#instance}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#policy_data GoogleIapTunnelInstanceIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#id GoogleIapTunnelInstanceIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#project GoogleIapTunnelInstanceIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#zone GoogleIapTunnelInstanceIamPolicy#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#instance GoogleIapTunnelInstanceIamPolicy#instance}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#policy_data GoogleIapTunnelInstanceIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#id GoogleIapTunnelInstanceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#project GoogleIapTunnelInstanceIamPolicy#project}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleIapTunnelInstanceIamPolicy.GoogleIapTunnelInstanceIamPolicyConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_iap_tunnel_instance_iam_policy#zone GoogleIapTunnelInstanceIamPolicy#zone}.

---



