# `google_gke_hub_feature_membership`

Refer to the Terraform Registory for docs: [`google_gke_hub_feature_membership`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership).

# `googleGkeHubFeatureMembership` Submodule <a name="`googleGkeHubFeatureMembership` Submodule" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubFeatureMembership <a name="GoogleGkeHubFeatureMembership" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership google_gke_hub_feature_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembership(scope Construct, id *string, config GoogleGkeHubFeatureMembershipConfig) GoogleGkeHubFeatureMembership
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig">GoogleGkeHubFeatureMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig">GoogleGkeHubFeatureMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putConfigmanagement">PutConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putMesh">PutMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetConfigmanagement">ResetConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetMesh">ResetMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfigmanagement` <a name="PutConfigmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putConfigmanagement"></a>

```go
func PutConfigmanagement(value GoogleGkeHubFeatureMembershipConfigmanagement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putConfigmanagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a>

---

##### `PutMesh` <a name="PutMesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putMesh"></a>

```go
func PutMesh(value GoogleGkeHubFeatureMembershipMesh)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putMesh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGkeHubFeatureMembershipTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts">GoogleGkeHubFeatureMembershipTimeouts</a>

---

##### `ResetConfigmanagement` <a name="ResetConfigmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetConfigmanagement"></a>

```go
func ResetConfigmanagement()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetId"></a>

```go
func ResetId()
```

##### `ResetMesh` <a name="ResetMesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetMesh"></a>

```go
func ResetMesh()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.GoogleGkeHubFeatureMembership_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.GoogleGkeHubFeatureMembership_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.GoogleGkeHubFeatureMembership_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.configmanagement">Configmanagement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.mesh">Mesh</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference">GoogleGkeHubFeatureMembershipMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference">GoogleGkeHubFeatureMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.configmanagementInput">ConfigmanagementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.featureInput">FeatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.membershipInput">MembershipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.meshInput">MeshInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.feature">Feature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.membership">Membership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configmanagement`<sup>Required</sup> <a name="Configmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.configmanagement"></a>

```go
func Configmanagement() GoogleGkeHubFeatureMembershipConfigmanagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementOutputReference</a>

---

##### `Mesh`<sup>Required</sup> <a name="Mesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.mesh"></a>

```go
func Mesh() GoogleGkeHubFeatureMembershipMeshOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference">GoogleGkeHubFeatureMembershipMeshOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.timeouts"></a>

```go
func Timeouts() GoogleGkeHubFeatureMembershipTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference">GoogleGkeHubFeatureMembershipTimeoutsOutputReference</a>

---

##### `ConfigmanagementInput`<sup>Optional</sup> <a name="ConfigmanagementInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.configmanagementInput"></a>

```go
func ConfigmanagementInput() GoogleGkeHubFeatureMembershipConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a>

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.featureInput"></a>

```go
func FeatureInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembershipInput`<sup>Optional</sup> <a name="MembershipInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.membershipInput"></a>

```go
func MembershipInput() *string
```

- *Type:* *string

---

##### `MeshInput`<sup>Optional</sup> <a name="MeshInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.meshInput"></a>

```go
func MeshInput() GoogleGkeHubFeatureMembershipMesh
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.feature"></a>

```go
func Feature() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.membership"></a>

```go
func Membership() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubFeatureMembershipConfig <a name="GoogleGkeHubFeatureMembershipConfig" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Feature: *string,
	Location: *string,
	Membership: *string,
	Configmanagement: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement,
	Id: *string,
	Mesh: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.feature">Feature</a></code> | <code>*string</code> | The name of the feature. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.location">Location</a></code> | <code>*string</code> | The location of the feature. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.membership">Membership</a></code> | <code>*string</code> | The name of the membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.configmanagement">Configmanagement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a></code> | configmanagement block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#id GoogleGkeHubFeatureMembership#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.mesh">Mesh</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a></code> | mesh block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.project">Project</a></code> | <code>*string</code> | The project of the feature. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts">GoogleGkeHubFeatureMembershipTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.feature"></a>

```go
Feature *string
```

- *Type:* *string

The name of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#feature GoogleGkeHubFeatureMembership#feature}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#location GoogleGkeHubFeatureMembership#location}

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.membership"></a>

```go
Membership *string
```

- *Type:* *string

The name of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#membership GoogleGkeHubFeatureMembership#membership}

---

##### `Configmanagement`<sup>Optional</sup> <a name="Configmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.configmanagement"></a>

```go
Configmanagement GoogleGkeHubFeatureMembershipConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a>

configmanagement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#configmanagement GoogleGkeHubFeatureMembership#configmanagement}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#id GoogleGkeHubFeatureMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mesh`<sup>Optional</sup> <a name="Mesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.mesh"></a>

```go
Mesh GoogleGkeHubFeatureMembershipMesh
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a>

mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#mesh GoogleGkeHubFeatureMembership#mesh}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#project GoogleGkeHubFeatureMembership#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.timeouts"></a>

```go
Timeouts GoogleGkeHubFeatureMembershipTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts">GoogleGkeHubFeatureMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#timeouts GoogleGkeHubFeatureMembership#timeouts}

---

### GoogleGkeHubFeatureMembershipConfigmanagement <a name="GoogleGkeHubFeatureMembershipConfigmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipConfigmanagement {
	Binauthz: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz,
	ConfigSync: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync,
	HierarchyController: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController,
	PolicyController: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.binauthz">Binauthz</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | binauthz block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.configSync">ConfigSync</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | config_sync block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.hierarchyController">HierarchyController</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | hierarchy_controller block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.policyController">PolicyController</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | policy_controller block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.version">Version</a></code> | <code>*string</code> | Optional. Version of ACM to install. Defaults to the latest version. |

---

##### `Binauthz`<sup>Optional</sup> <a name="Binauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.binauthz"></a>

```go
Binauthz GoogleGkeHubFeatureMembershipConfigmanagementBinauthz
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a>

binauthz block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#binauthz GoogleGkeHubFeatureMembership#binauthz}

---

##### `ConfigSync`<sup>Optional</sup> <a name="ConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.configSync"></a>

```go
ConfigSync GoogleGkeHubFeatureMembershipConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a>

config_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#config_sync GoogleGkeHubFeatureMembership#config_sync}

---

##### `HierarchyController`<sup>Optional</sup> <a name="HierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.hierarchyController"></a>

```go
HierarchyController GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a>

hierarchy_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#hierarchy_controller GoogleGkeHubFeatureMembership#hierarchy_controller}

---

##### `PolicyController`<sup>Optional</sup> <a name="PolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.policyController"></a>

```go
PolicyController GoogleGkeHubFeatureMembershipConfigmanagementPolicyController
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a>

policy_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#policy_controller GoogleGkeHubFeatureMembership#policy_controller}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.version"></a>

```go
Version *string
```

- *Type:* *string

Optional. Version of ACM to install. Defaults to the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#version GoogleGkeHubFeatureMembership#version}

---

### GoogleGkeHubFeatureMembershipConfigmanagementBinauthz <a name="GoogleGkeHubFeatureMembershipConfigmanagementBinauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether binauthz is enabled in this cluster. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether binauthz is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#enabled GoogleGkeHubFeatureMembership#enabled}

---

### GoogleGkeHubFeatureMembershipConfigmanagementConfigSync <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync {
	Git: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit,
	Oci: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci,
	PreventDrift: interface{},
	SourceFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.git">Git</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | git block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.oci">Oci</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | oci block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift">PreventDrift</a></code> | <code>interface{}</code> | Set to true to enable the Config Sync admission webhook to prevent drifts. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode. |

---

##### `Git`<sup>Optional</sup> <a name="Git" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.git"></a>

```go
Git GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#git GoogleGkeHubFeatureMembership#git}

---

##### `Oci`<sup>Optional</sup> <a name="Oci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.oci"></a>

```go
Oci GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#oci GoogleGkeHubFeatureMembership#oci}

---

##### `PreventDrift`<sup>Optional</sup> <a name="PreventDrift" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift"></a>

```go
PreventDrift interface{}
```

- *Type:* interface{}

Set to true to enable the Config Sync admission webhook to prevent drifts.

If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#prevent_drift GoogleGkeHubFeatureMembership#prevent_drift}

---

##### `SourceFormat`<sup>Optional</sup> <a name="SourceFormat" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat"></a>

```go
SourceFormat *string
```

- *Type:* *string

Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#source_format GoogleGkeHubFeatureMembership#source_format}

---

### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit {
	GcpServiceAccountEmail: *string,
	HttpsProxy: *string,
	PolicyDir: *string,
	SecretType: *string,
	SyncBranch: *string,
	SyncRepo: *string,
	SyncRev: *string,
	SyncWaitSecs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | The GCP Service Account Email used for auth when secretType is gcpServiceAccount. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy">HttpsProxy</a></code> | <code>*string</code> | URL for the HTTPS proxy to be used when communicating with the Git repo. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir">PolicyDir</a></code> | <code>*string</code> | The path within the Git repository that represents the top level of the repo to sync. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType">SecretType</a></code> | <code>*string</code> | Type of secret configured for access to the Git repo. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch">SyncBranch</a></code> | <code>*string</code> | The branch of the repository to sync from. Default: master. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo">SyncRepo</a></code> | <code>*string</code> | The URL of the Git repository to use as the source of truth. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev">SyncRev</a></code> | <code>*string</code> | Git revision (tag or hash) to check out. Default HEAD. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>*string</code> | Period in seconds between consecutive syncs. Default: 15. |

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail"></a>

```go
GcpServiceAccountEmail *string
```

- *Type:* *string

The GCP Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#gcp_service_account_email GoogleGkeHubFeatureMembership#gcp_service_account_email}

---

##### `HttpsProxy`<sup>Optional</sup> <a name="HttpsProxy" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy"></a>

```go
HttpsProxy *string
```

- *Type:* *string

URL for the HTTPS proxy to be used when communicating with the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#https_proxy GoogleGkeHubFeatureMembership#https_proxy}

---

##### `PolicyDir`<sup>Optional</sup> <a name="PolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir"></a>

```go
PolicyDir *string
```

- *Type:* *string

The path within the Git repository that represents the top level of the repo to sync.

Default: the root directory of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#policy_dir GoogleGkeHubFeatureMembership#policy_dir}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType"></a>

```go
SecretType *string
```

- *Type:* *string

Type of secret configured for access to the Git repo.

Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#secret_type GoogleGkeHubFeatureMembership#secret_type}

---

##### `SyncBranch`<sup>Optional</sup> <a name="SyncBranch" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch"></a>

```go
SyncBranch *string
```

- *Type:* *string

The branch of the repository to sync from. Default: master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#sync_branch GoogleGkeHubFeatureMembership#sync_branch}

---

##### `SyncRepo`<sup>Optional</sup> <a name="SyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo"></a>

```go
SyncRepo *string
```

- *Type:* *string

The URL of the Git repository to use as the source of truth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#sync_repo GoogleGkeHubFeatureMembership#sync_repo}

---

##### `SyncRev`<sup>Optional</sup> <a name="SyncRev" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev"></a>

```go
SyncRev *string
```

- *Type:* *string

Git revision (tag or hash) to check out. Default HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#sync_rev GoogleGkeHubFeatureMembership#sync_rev}

---

##### `SyncWaitSecs`<sup>Optional</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs"></a>

```go
SyncWaitSecs *string
```

- *Type:* *string

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#sync_wait_secs GoogleGkeHubFeatureMembership#sync_wait_secs}

---

### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci {
	GcpServiceAccountEmail: *string,
	PolicyDir: *string,
	SecretType: *string,
	SyncRepo: *string,
	SyncWaitSecs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | The GCP Service Account Email used for auth when secret_type is gcpserviceaccount. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir">PolicyDir</a></code> | <code>*string</code> | The absolute path of the directory that contains the local resources. Default: the root directory of the image. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType">SecretType</a></code> | <code>*string</code> | Type of secret configured for access to the OCI Image. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo">SyncRepo</a></code> | <code>*string</code> | The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>*string</code> | Period in seconds(int64 format) between consecutive syncs. Default: 15. |

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail"></a>

```go
GcpServiceAccountEmail *string
```

- *Type:* *string

The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#gcp_service_account_email GoogleGkeHubFeatureMembership#gcp_service_account_email}

---

##### `PolicyDir`<sup>Optional</sup> <a name="PolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir"></a>

```go
PolicyDir *string
```

- *Type:* *string

The absolute path of the directory that contains the local resources. Default: the root directory of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#policy_dir GoogleGkeHubFeatureMembership#policy_dir}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType"></a>

```go
SecretType *string
```

- *Type:* *string

Type of secret configured for access to the OCI Image.

Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#secret_type GoogleGkeHubFeatureMembership#secret_type}

---

##### `SyncRepo`<sup>Optional</sup> <a name="SyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo"></a>

```go
SyncRepo *string
```

- *Type:* *string

The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#sync_repo GoogleGkeHubFeatureMembership#sync_repo}

---

##### `SyncWaitSecs`<sup>Optional</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs"></a>

```go
SyncWaitSecs *string
```

- *Type:* *string

Period in seconds(int64 format) between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#sync_wait_secs GoogleGkeHubFeatureMembership#sync_wait_secs}

---

### GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController <a name="GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController {
	Enabled: interface{},
	EnableHierarchicalResourceQuota: interface{},
	EnablePodTreeLabels: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Hierarchy Controller is enabled in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota">EnableHierarchicalResourceQuota</a></code> | <code>interface{}</code> | Whether hierarchical resource quota is enabled in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels">EnablePodTreeLabels</a></code> | <code>interface{}</code> | Whether pod tree labels are enabled in this cluster. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Hierarchy Controller is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#enabled GoogleGkeHubFeatureMembership#enabled}

---

##### `EnableHierarchicalResourceQuota`<sup>Optional</sup> <a name="EnableHierarchicalResourceQuota" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota"></a>

```go
EnableHierarchicalResourceQuota interface{}
```

- *Type:* interface{}

Whether hierarchical resource quota is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#enable_hierarchical_resource_quota GoogleGkeHubFeatureMembership#enable_hierarchical_resource_quota}

---

##### `EnablePodTreeLabels`<sup>Optional</sup> <a name="EnablePodTreeLabels" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels"></a>

```go
EnablePodTreeLabels interface{}
```

- *Type:* interface{}

Whether pod tree labels are enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#enable_pod_tree_labels GoogleGkeHubFeatureMembership#enable_pod_tree_labels}

---

### GoogleGkeHubFeatureMembershipConfigmanagementPolicyController <a name="GoogleGkeHubFeatureMembershipConfigmanagementPolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController {
	AuditIntervalSeconds: *string,
	Enabled: interface{},
	ExemptableNamespaces: *[]*string,
	LogDeniesEnabled: interface{},
	Monitoring: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring,
	MutationEnabled: interface{},
	ReferentialRulesEnabled: interface{},
	TemplateLibraryInstalled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds">AuditIntervalSeconds</a></code> | <code>*string</code> | Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces">ExemptableNamespaces</a></code> | <code>*[]*string</code> | The set of namespaces that are excluded from Policy Controller checks. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled">LogDeniesEnabled</a></code> | <code>interface{}</code> | Logs all denies and dry run failures. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled">MutationEnabled</a></code> | <code>interface{}</code> | Enable or disable mutation in policy controller. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled">ReferentialRulesEnabled</a></code> | <code>interface{}</code> | Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled">TemplateLibraryInstalled</a></code> | <code>interface{}</code> | Installs the default template library along with Policy Controller. |

---

##### `AuditIntervalSeconds`<sup>Optional</sup> <a name="AuditIntervalSeconds" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds"></a>

```go
AuditIntervalSeconds *string
```

- *Type:* *string

Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#audit_interval_seconds GoogleGkeHubFeatureMembership#audit_interval_seconds}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#enabled GoogleGkeHubFeatureMembership#enabled}

---

##### `ExemptableNamespaces`<sup>Optional</sup> <a name="ExemptableNamespaces" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces"></a>

```go
ExemptableNamespaces *[]*string
```

- *Type:* *[]*string

The set of namespaces that are excluded from Policy Controller checks.

Namespaces do not need to currently exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#exemptable_namespaces GoogleGkeHubFeatureMembership#exemptable_namespaces}

---

##### `LogDeniesEnabled`<sup>Optional</sup> <a name="LogDeniesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled"></a>

```go
LogDeniesEnabled interface{}
```

- *Type:* interface{}

Logs all denies and dry run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#log_denies_enabled GoogleGkeHubFeatureMembership#log_denies_enabled}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring"></a>

```go
Monitoring GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#monitoring GoogleGkeHubFeatureMembership#monitoring}

---

##### `MutationEnabled`<sup>Optional</sup> <a name="MutationEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled"></a>

```go
MutationEnabled interface{}
```

- *Type:* interface{}

Enable or disable mutation in policy controller.

If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#mutation_enabled GoogleGkeHubFeatureMembership#mutation_enabled}

---

##### `ReferentialRulesEnabled`<sup>Optional</sup> <a name="ReferentialRulesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled"></a>

```go
ReferentialRulesEnabled interface{}
```

- *Type:* interface{}

Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#referential_rules_enabled GoogleGkeHubFeatureMembership#referential_rules_enabled}

---

##### `TemplateLibraryInstalled`<sup>Optional</sup> <a name="TemplateLibraryInstalled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled"></a>

```go
TemplateLibraryInstalled interface{}
```

- *Type:* interface{}

Installs the default template library along with Policy Controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#template_library_installed GoogleGkeHubFeatureMembership#template_library_installed}

---

### GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring <a name="GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring {
	Backends: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends">Backends</a></code> | <code>*[]*string</code> | Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export. |

---

##### `Backends`<sup>Optional</sup> <a name="Backends" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends"></a>

```go
Backends *[]*string
```

- *Type:* *[]*string

Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#backends GoogleGkeHubFeatureMembership#backends}

---

### GoogleGkeHubFeatureMembershipMesh <a name="GoogleGkeHubFeatureMembershipMesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipMesh {
	ControlPlane: *string,
	Management: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.property.controlPlane">ControlPlane</a></code> | <code>*string</code> | **DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.property.management">Management</a></code> | <code>*string</code> | Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL. |

---

##### `ControlPlane`<sup>Optional</sup> <a name="ControlPlane" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.property.controlPlane"></a>

```go
ControlPlane *string
```

- *Type:* *string

**DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#control_plane GoogleGkeHubFeatureMembership#control_plane}

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.property.management"></a>

```go
Management *string
```

- *Type:* *string

Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#management GoogleGkeHubFeatureMembership#management}

---

### GoogleGkeHubFeatureMembershipTimeouts <a name="GoogleGkeHubFeatureMembershipTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

&googlegkehubfeaturemembership.GoogleGkeHubFeatureMembershipTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#create GoogleGkeHubFeatureMembership#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#delete GoogleGkeHubFeatureMembership#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#update GoogleGkeHubFeatureMembership#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#create GoogleGkeHubFeatureMembership#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#delete GoogleGkeHubFeatureMembership#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_gke_hub_feature_membership#update GoogleGkeHubFeatureMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureMembershipConfigmanagementBinauthz
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy">ResetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir">ResetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch">ResetSyncBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo">ResetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev">ResetSyncRev</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs">ResetSyncWaitSecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail"></a>

```go
func ResetGcpServiceAccountEmail()
```

##### `ResetHttpsProxy` <a name="ResetHttpsProxy" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy"></a>

```go
func ResetHttpsProxy()
```

##### `ResetPolicyDir` <a name="ResetPolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir"></a>

```go
func ResetPolicyDir()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType"></a>

```go
func ResetSecretType()
```

##### `ResetSyncBranch` <a name="ResetSyncBranch" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch"></a>

```go
func ResetSyncBranch()
```

##### `ResetSyncRepo` <a name="ResetSyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo"></a>

```go
func ResetSyncRepo()
```

##### `ResetSyncRev` <a name="ResetSyncRev" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev"></a>

```go
func ResetSyncRev()
```

##### `ResetSyncWaitSecs` <a name="ResetSyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs"></a>

```go
func ResetSyncWaitSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput">HttpsProxyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput">PolicyDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput">SyncBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput">SyncRepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput">SyncRevInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput">SyncWaitSecsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy">HttpsProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir">PolicyDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch">SyncBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo">SyncRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev">SyncRev</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput"></a>

```go
func GcpServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `HttpsProxyInput`<sup>Optional</sup> <a name="HttpsProxyInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput"></a>

```go
func HttpsProxyInput() *string
```

- *Type:* *string

---

##### `PolicyDirInput`<sup>Optional</sup> <a name="PolicyDirInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput"></a>

```go
func PolicyDirInput() *string
```

- *Type:* *string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput"></a>

```go
func SecretTypeInput() *string
```

- *Type:* *string

---

##### `SyncBranchInput`<sup>Optional</sup> <a name="SyncBranchInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput"></a>

```go
func SyncBranchInput() *string
```

- *Type:* *string

---

##### `SyncRepoInput`<sup>Optional</sup> <a name="SyncRepoInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput"></a>

```go
func SyncRepoInput() *string
```

- *Type:* *string

---

##### `SyncRevInput`<sup>Optional</sup> <a name="SyncRevInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput"></a>

```go
func SyncRevInput() *string
```

- *Type:* *string

---

##### `SyncWaitSecsInput`<sup>Optional</sup> <a name="SyncWaitSecsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput"></a>

```go
func SyncWaitSecsInput() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail"></a>

```go
func GcpServiceAccountEmail() *string
```

- *Type:* *string

---

##### `HttpsProxy`<sup>Required</sup> <a name="HttpsProxy" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy"></a>

```go
func HttpsProxy() *string
```

- *Type:* *string

---

##### `PolicyDir`<sup>Required</sup> <a name="PolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir"></a>

```go
func PolicyDir() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `SyncBranch`<sup>Required</sup> <a name="SyncBranch" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch"></a>

```go
func SyncBranch() *string
```

- *Type:* *string

---

##### `SyncRepo`<sup>Required</sup> <a name="SyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo"></a>

```go
func SyncRepo() *string
```

- *Type:* *string

---

##### `SyncRev`<sup>Required</sup> <a name="SyncRev" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev"></a>

```go
func SyncRev() *string
```

- *Type:* *string

---

##### `SyncWaitSecs`<sup>Required</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs"></a>

```go
func SyncWaitSecs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir">ResetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo">ResetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs">ResetSyncWaitSecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail"></a>

```go
func ResetGcpServiceAccountEmail()
```

##### `ResetPolicyDir` <a name="ResetPolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir"></a>

```go
func ResetPolicyDir()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType"></a>

```go
func ResetSecretType()
```

##### `ResetSyncRepo` <a name="ResetSyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo"></a>

```go
func ResetSyncRepo()
```

##### `ResetSyncWaitSecs` <a name="ResetSyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs"></a>

```go
func ResetSyncWaitSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput">PolicyDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput">SyncRepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput">SyncWaitSecsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir">PolicyDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo">SyncRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput"></a>

```go
func GcpServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `PolicyDirInput`<sup>Optional</sup> <a name="PolicyDirInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput"></a>

```go
func PolicyDirInput() *string
```

- *Type:* *string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput"></a>

```go
func SecretTypeInput() *string
```

- *Type:* *string

---

##### `SyncRepoInput`<sup>Optional</sup> <a name="SyncRepoInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput"></a>

```go
func SyncRepoInput() *string
```

- *Type:* *string

---

##### `SyncWaitSecsInput`<sup>Optional</sup> <a name="SyncWaitSecsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput"></a>

```go
func SyncWaitSecsInput() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail"></a>

```go
func GcpServiceAccountEmail() *string
```

- *Type:* *string

---

##### `PolicyDir`<sup>Required</sup> <a name="PolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir"></a>

```go
func PolicyDir() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `SyncRepo`<sup>Required</sup> <a name="SyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo"></a>

```go
func SyncRepo() *string
```

- *Type:* *string

---

##### `SyncWaitSecs`<sup>Required</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs"></a>

```go
func SyncWaitSecs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit">PutGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci">PutOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit">ResetGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci">ResetOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift">ResetPreventDrift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat">ResetSourceFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGit` <a name="PutGit" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit"></a>

```go
func PutGit(value GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `PutOci` <a name="PutOci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci"></a>

```go
func PutOci(value GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `ResetGit` <a name="ResetGit" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit"></a>

```go
func ResetGit()
```

##### `ResetOci` <a name="ResetOci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci"></a>

```go
func ResetOci()
```

##### `ResetPreventDrift` <a name="ResetPreventDrift" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift"></a>

```go
func ResetPreventDrift()
```

##### `ResetSourceFormat` <a name="ResetSourceFormat" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat"></a>

```go
func ResetSourceFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git">Git</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci">Oci</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput">GitInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput">OciInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput">PreventDriftInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput">SourceFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift">PreventDrift</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Git`<sup>Required</sup> <a name="Git" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git"></a>

```go
func Git() GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a>

---

##### `Oci`<sup>Required</sup> <a name="Oci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci"></a>

```go
func Oci() GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a>

---

##### `GitInput`<sup>Optional</sup> <a name="GitInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput"></a>

```go
func GitInput() GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `OciInput`<sup>Optional</sup> <a name="OciInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput"></a>

```go
func OciInput() GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `PreventDriftInput`<sup>Optional</sup> <a name="PreventDriftInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput"></a>

```go
func PreventDriftInput() interface{}
```

- *Type:* interface{}

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput"></a>

```go
func SourceFormatInput() *string
```

- *Type:* *string

---

##### `PreventDrift`<sup>Required</sup> <a name="PreventDrift" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift"></a>

```go
func PreventDrift() interface{}
```

- *Type:* interface{}

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat"></a>

```go
func SourceFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureMembershipConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota">ResetEnableHierarchicalResourceQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels">ResetEnablePodTreeLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnableHierarchicalResourceQuota` <a name="ResetEnableHierarchicalResourceQuota" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota"></a>

```go
func ResetEnableHierarchicalResourceQuota()
```

##### `ResetEnablePodTreeLabels` <a name="ResetEnablePodTreeLabels" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels"></a>

```go
func ResetEnablePodTreeLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput">EnableHierarchicalResourceQuotaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput">EnablePodTreeLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota">EnableHierarchicalResourceQuota</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels">EnablePodTreeLabels</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableHierarchicalResourceQuotaInput`<sup>Optional</sup> <a name="EnableHierarchicalResourceQuotaInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput"></a>

```go
func EnableHierarchicalResourceQuotaInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePodTreeLabelsInput`<sup>Optional</sup> <a name="EnablePodTreeLabelsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput"></a>

```go
func EnablePodTreeLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EnableHierarchicalResourceQuota`<sup>Required</sup> <a name="EnableHierarchicalResourceQuota" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota"></a>

```go
func EnableHierarchicalResourceQuota() interface{}
```

- *Type:* interface{}

---

##### `EnablePodTreeLabels`<sup>Required</sup> <a name="EnablePodTreeLabels" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels"></a>

```go
func EnablePodTreeLabels() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipConfigmanagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipConfigmanagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz">PutBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync">PutConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController">PutHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController">PutPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz">ResetBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync">ResetConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController">ResetHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController">ResetPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBinauthz` <a name="PutBinauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz"></a>

```go
func PutBinauthz(value GoogleGkeHubFeatureMembershipConfigmanagementBinauthz)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `PutConfigSync` <a name="PutConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync"></a>

```go
func PutConfigSync(value GoogleGkeHubFeatureMembershipConfigmanagementConfigSync)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `PutHierarchyController` <a name="PutHierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController"></a>

```go
func PutHierarchyController(value GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `PutPolicyController` <a name="PutPolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController"></a>

```go
func PutPolicyController(value GoogleGkeHubFeatureMembershipConfigmanagementPolicyController)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `ResetBinauthz` <a name="ResetBinauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz"></a>

```go
func ResetBinauthz()
```

##### `ResetConfigSync` <a name="ResetConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync"></a>

```go
func ResetConfigSync()
```

##### `ResetHierarchyController` <a name="ResetHierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController"></a>

```go
func ResetHierarchyController()
```

##### `ResetPolicyController` <a name="ResetPolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController"></a>

```go
func ResetPolicyController()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz">Binauthz</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync">ConfigSync</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController">HierarchyController</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController">PolicyController</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput">BinauthzInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput">ConfigSyncInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput">HierarchyControllerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput">PolicyControllerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Binauthz`<sup>Required</sup> <a name="Binauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz"></a>

```go
func Binauthz() GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a>

---

##### `ConfigSync`<sup>Required</sup> <a name="ConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync"></a>

```go
func ConfigSync() GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a>

---

##### `HierarchyController`<sup>Required</sup> <a name="HierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController"></a>

```go
func HierarchyController() GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a>

---

##### `PolicyController`<sup>Required</sup> <a name="PolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController"></a>

```go
func PolicyController() GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a>

---

##### `BinauthzInput`<sup>Optional</sup> <a name="BinauthzInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput"></a>

```go
func BinauthzInput() GoogleGkeHubFeatureMembershipConfigmanagementBinauthz
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `ConfigSyncInput`<sup>Optional</sup> <a name="ConfigSyncInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput"></a>

```go
func ConfigSyncInput() GoogleGkeHubFeatureMembershipConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `HierarchyControllerInput`<sup>Optional</sup> <a name="HierarchyControllerInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput"></a>

```go
func HierarchyControllerInput() GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `PolicyControllerInput`<sup>Optional</sup> <a name="PolicyControllerInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput"></a>

```go
func PolicyControllerInput() GoogleGkeHubFeatureMembershipConfigmanagementPolicyController
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureMembershipConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends">ResetBackends</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackends` <a name="ResetBackends" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends"></a>

```go
func ResetBackends()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput">BackendsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends">Backends</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendsInput`<sup>Optional</sup> <a name="BackendsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput"></a>

```go
func BackendsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Backends`<sup>Required</sup> <a name="Backends" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends"></a>

```go
func Backends() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds">ResetAuditIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces">ResetExemptableNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled">ResetLogDeniesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled">ResetMutationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled">ResetReferentialRulesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled">ResetTemplateLibraryInstalled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring"></a>

```go
func PutMonitoring(value GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `ResetAuditIntervalSeconds` <a name="ResetAuditIntervalSeconds" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds"></a>

```go
func ResetAuditIntervalSeconds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetExemptableNamespaces` <a name="ResetExemptableNamespaces" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces"></a>

```go
func ResetExemptableNamespaces()
```

##### `ResetLogDeniesEnabled` <a name="ResetLogDeniesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled"></a>

```go
func ResetLogDeniesEnabled()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetMutationEnabled` <a name="ResetMutationEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled"></a>

```go
func ResetMutationEnabled()
```

##### `ResetReferentialRulesEnabled` <a name="ResetReferentialRulesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled"></a>

```go
func ResetReferentialRulesEnabled()
```

##### `ResetTemplateLibraryInstalled` <a name="ResetTemplateLibraryInstalled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled"></a>

```go
func ResetTemplateLibraryInstalled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput">AuditIntervalSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput">ExemptableNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput">LogDeniesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput">MonitoringInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput">MutationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput">ReferentialRulesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput">TemplateLibraryInstalledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds">AuditIntervalSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces">ExemptableNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled">LogDeniesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled">MutationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled">ReferentialRulesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled">TemplateLibraryInstalled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring"></a>

```go
func Monitoring() GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a>

---

##### `AuditIntervalSecondsInput`<sup>Optional</sup> <a name="AuditIntervalSecondsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput"></a>

```go
func AuditIntervalSecondsInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExemptableNamespacesInput`<sup>Optional</sup> <a name="ExemptableNamespacesInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput"></a>

```go
func ExemptableNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogDeniesEnabledInput`<sup>Optional</sup> <a name="LogDeniesEnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput"></a>

```go
func LogDeniesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput"></a>

```go
func MonitoringInput() GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `MutationEnabledInput`<sup>Optional</sup> <a name="MutationEnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput"></a>

```go
func MutationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReferentialRulesEnabledInput`<sup>Optional</sup> <a name="ReferentialRulesEnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput"></a>

```go
func ReferentialRulesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateLibraryInstalledInput`<sup>Optional</sup> <a name="TemplateLibraryInstalledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput"></a>

```go
func TemplateLibraryInstalledInput() interface{}
```

- *Type:* interface{}

---

##### `AuditIntervalSeconds`<sup>Required</sup> <a name="AuditIntervalSeconds" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds"></a>

```go
func AuditIntervalSeconds() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ExemptableNamespaces`<sup>Required</sup> <a name="ExemptableNamespaces" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces"></a>

```go
func ExemptableNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `LogDeniesEnabled`<sup>Required</sup> <a name="LogDeniesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled"></a>

```go
func LogDeniesEnabled() interface{}
```

- *Type:* interface{}

---

##### `MutationEnabled`<sup>Required</sup> <a name="MutationEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled"></a>

```go
func MutationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReferentialRulesEnabled`<sup>Required</sup> <a name="ReferentialRulesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled"></a>

```go
func ReferentialRulesEnabled() interface{}
```

- *Type:* interface{}

---

##### `TemplateLibraryInstalled`<sup>Required</sup> <a name="TemplateLibraryInstalled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled"></a>

```go
func TemplateLibraryInstalled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureMembershipConfigmanagementPolicyController
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a>

---


### GoogleGkeHubFeatureMembershipMeshOutputReference <a name="GoogleGkeHubFeatureMembershipMeshOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipMeshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipMeshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resetControlPlane">ResetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resetManagement">ResetManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlane` <a name="ResetControlPlane" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resetControlPlane"></a>

```go
func ResetControlPlane()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resetManagement"></a>

```go
func ResetManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput">ControlPlaneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.managementInput">ManagementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.controlPlane">ControlPlane</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.management">Management</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput"></a>

```go
func ControlPlaneInput() *string
```

- *Type:* *string

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.managementInput"></a>

```go
func ManagementInput() *string
```

- *Type:* *string

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.controlPlane"></a>

```go
func ControlPlane() *string
```

- *Type:* *string

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.management"></a>

```go
func Management() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFeatureMembershipMesh
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a>

---


### GoogleGkeHubFeatureMembershipTimeoutsOutputReference <a name="GoogleGkeHubFeatureMembershipTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubfeaturemembership"

googlegkehubfeaturemembership.NewGoogleGkeHubFeatureMembershipTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFeatureMembershipTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



