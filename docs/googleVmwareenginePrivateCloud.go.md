# `google_vmwareengine_private_cloud`

Refer to the Terraform Registory for docs: [`google_vmwareengine_private_cloud`](https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud).

# `googleVmwareenginePrivateCloud` Submodule <a name="`googleVmwareenginePrivateCloud` Submodule" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareenginePrivateCloud <a name="GoogleVmwareenginePrivateCloud" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud google_vmwareengine_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloud(scope Construct, id *string, config GoogleVmwareenginePrivateCloudConfig) GoogleVmwareenginePrivateCloud
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig">GoogleVmwareenginePrivateCloudConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig">GoogleVmwareenginePrivateCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putManagementCluster">PutManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutManagementCluster` <a name="PutManagementCluster" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putManagementCluster"></a>

```go
func PutManagementCluster(value GoogleVmwareenginePrivateCloudManagementCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putManagementCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putNetworkConfig"></a>

```go
func PutNetworkConfig(value GoogleVmwareenginePrivateCloudNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVmwareenginePrivateCloudTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloud_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloud_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloud_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.hcx">Hcx</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList">GoogleVmwareenginePrivateCloudHcxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.managementCluster">ManagementCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference">GoogleVmwareenginePrivateCloudManagementClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference">GoogleVmwareenginePrivateCloudNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.nsx">Nsx</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList">GoogleVmwareenginePrivateCloudNsxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference">GoogleVmwareenginePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList">GoogleVmwareenginePrivateCloudVcenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.managementClusterInput">ManagementClusterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hcx`<sup>Required</sup> <a name="Hcx" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.hcx"></a>

```go
func Hcx() GoogleVmwareenginePrivateCloudHcxList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList">GoogleVmwareenginePrivateCloudHcxList</a>

---

##### `ManagementCluster`<sup>Required</sup> <a name="ManagementCluster" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.managementCluster"></a>

```go
func ManagementCluster() GoogleVmwareenginePrivateCloudManagementClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference">GoogleVmwareenginePrivateCloudManagementClusterOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.networkConfig"></a>

```go
func NetworkConfig() GoogleVmwareenginePrivateCloudNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference">GoogleVmwareenginePrivateCloudNetworkConfigOutputReference</a>

---

##### `Nsx`<sup>Required</sup> <a name="Nsx" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.nsx"></a>

```go
func Nsx() GoogleVmwareenginePrivateCloudNsxList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList">GoogleVmwareenginePrivateCloudNsxList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.timeouts"></a>

```go
func Timeouts() GoogleVmwareenginePrivateCloudTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference">GoogleVmwareenginePrivateCloudTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `Vcenter`<sup>Required</sup> <a name="Vcenter" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.vcenter"></a>

```go
func Vcenter() GoogleVmwareenginePrivateCloudVcenterList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList">GoogleVmwareenginePrivateCloudVcenterList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagementClusterInput`<sup>Optional</sup> <a name="ManagementClusterInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.managementClusterInput"></a>

```go
func ManagementClusterInput() GoogleVmwareenginePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.networkConfigInput"></a>

```go
func NetworkConfigInput() GoogleVmwareenginePrivateCloudNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloud.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareenginePrivateCloudConfig <a name="GoogleVmwareenginePrivateCloudConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

&googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloudConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ManagementCluster: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster,
	Name: *string,
	NetworkConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.location">Location</a></code> | <code>*string</code> | The location where the PrivateCloud should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.managementCluster">ManagementCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the PrivateCloud. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description for this private cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#id GoogleVmwareenginePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#project GoogleVmwareenginePrivateCloud#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the PrivateCloud should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#location GoogleVmwareenginePrivateCloud#location}

---

##### `ManagementCluster`<sup>Required</sup> <a name="ManagementCluster" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.managementCluster"></a>

```go
ManagementCluster GoogleVmwareenginePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#management_cluster GoogleVmwareenginePrivateCloud#management_cluster}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the PrivateCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#name GoogleVmwareenginePrivateCloud#name}

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.networkConfig"></a>

```go
NetworkConfig GoogleVmwareenginePrivateCloudNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#network_config GoogleVmwareenginePrivateCloud#network_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description for this private cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#description GoogleVmwareenginePrivateCloud#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#id GoogleVmwareenginePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#project GoogleVmwareenginePrivateCloud#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudConfig.property.timeouts"></a>

```go
Timeouts GoogleVmwareenginePrivateCloudTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts">GoogleVmwareenginePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#timeouts GoogleVmwareenginePrivateCloud#timeouts}

---

### GoogleVmwareenginePrivateCloudHcx <a name="GoogleVmwareenginePrivateCloudHcx" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcx.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

&googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloudHcx {

}
```


### GoogleVmwareenginePrivateCloudManagementCluster <a name="GoogleVmwareenginePrivateCloudManagementCluster" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

&googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloudManagementCluster {
	ClusterId: *string,
	NodeTypeConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | The user-provided identifier of the new Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.property.nodeTypeConfigs">NodeTypeConfigs</a></code> | <code>interface{}</code> | node_type_configs block. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The user-provided identifier of the new Cluster.

The identifier must meet the following requirements:
Only contains 1-63 alphanumeric characters and hyphens
Begins with an alphabetical character
Ends with a non-hyphen character
Not formatted as a UUID
Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#cluster_id GoogleVmwareenginePrivateCloud#cluster_id}

---

##### `NodeTypeConfigs`<sup>Optional</sup> <a name="NodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster.property.nodeTypeConfigs"></a>

```go
NodeTypeConfigs interface{}
```

- *Type:* interface{}

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#node_type_configs GoogleVmwareenginePrivateCloud#node_type_configs}

---

### GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs <a name="GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

&googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs {
	NodeCount: *f64,
	NodeTypeId: *string,
	CustomCoreCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes of this type in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#node_type_id GoogleVmwareenginePrivateCloud#node_type_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.customCoreCount">CustomCoreCount</a></code> | <code>*f64</code> | Customized number of cores available to each node of the type. |

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes of this type in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#node_count GoogleVmwareenginePrivateCloud#node_count}

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeTypeId"></a>

```go
NodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#node_type_id GoogleVmwareenginePrivateCloud#node_type_id}.

---

##### `CustomCoreCount`<sup>Optional</sup> <a name="CustomCoreCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.customCoreCount"></a>

```go
CustomCoreCount *f64
```

- *Type:* *f64

Customized number of cores available to each node of the type.

This number must always be one of 'nodeType.availableCustomCoreCounts'.
If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
This cannot be changed once the PrivateCloud is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#custom_core_count GoogleVmwareenginePrivateCloud#custom_core_count}

---

### GoogleVmwareenginePrivateCloudNetworkConfig <a name="GoogleVmwareenginePrivateCloudNetworkConfig" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

&googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloudNetworkConfig {
	ManagementCidr: *string,
	VmwareEngineNetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.property.managementCidr">ManagementCidr</a></code> | <code>*string</code> | Management CIDR used by VMware management appliances. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>*string</code> | The relative resource name of the VMware Engine network attached to the private cloud. |

---

##### `ManagementCidr`<sup>Required</sup> <a name="ManagementCidr" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.property.managementCidr"></a>

```go
ManagementCidr *string
```

- *Type:* *string

Management CIDR used by VMware management appliances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#management_cidr GoogleVmwareenginePrivateCloud#management_cidr}

---

##### `VmwareEngineNetwork`<sup>Optional</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig.property.vmwareEngineNetwork"></a>

```go
VmwareEngineNetwork *string
```

- *Type:* *string

The relative resource name of the VMware Engine network attached to the private cloud.

Specify the name in the following form: projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
where {project} can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#vmware_engine_network GoogleVmwareenginePrivateCloud#vmware_engine_network}

---

### GoogleVmwareenginePrivateCloudNsx <a name="GoogleVmwareenginePrivateCloudNsx" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsx.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

&googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloudNsx {

}
```


### GoogleVmwareenginePrivateCloudTimeouts <a name="GoogleVmwareenginePrivateCloudTimeouts" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

&googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloudTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#create GoogleVmwareenginePrivateCloud#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#delete GoogleVmwareenginePrivateCloud#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#update GoogleVmwareenginePrivateCloud#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#create GoogleVmwareenginePrivateCloud#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#delete GoogleVmwareenginePrivateCloud#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_vmwareengine_private_cloud#update GoogleVmwareenginePrivateCloud#update}.

---

### GoogleVmwareenginePrivateCloudVcenter <a name="GoogleVmwareenginePrivateCloudVcenter" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

&googlevmwareengineprivatecloud.GoogleVmwareenginePrivateCloudVcenter {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareenginePrivateCloudHcxList <a name="GoogleVmwareenginePrivateCloudHcxList" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudHcxList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVmwareenginePrivateCloudHcxList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.get"></a>

```go
func Get(index *f64) GoogleVmwareenginePrivateCloudHcxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVmwareenginePrivateCloudHcxOutputReference <a name="GoogleVmwareenginePrivateCloudHcxOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudHcxOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVmwareenginePrivateCloudHcxOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp">InternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcx">GoogleVmwareenginePrivateCloudHcx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp"></a>

```go
func InternalIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareenginePrivateCloudHcx
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudHcx">GoogleVmwareenginePrivateCloudHcx</a>

---


### GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList <a name="GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get"></a>

```go
func Get(index *f64) GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference <a name="GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resetCustomCoreCount">ResetCustomCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomCoreCount` <a name="ResetCustomCoreCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resetCustomCoreCount"></a>

```go
func ResetCustomCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCountInput">CustomCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount">CustomCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomCoreCountInput`<sup>Optional</sup> <a name="CustomCoreCountInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCountInput"></a>

```go
func CustomCoreCountInput() *f64
```

- *Type:* *f64

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput"></a>

```go
func NodeTypeIdInput() *string
```

- *Type:* *string

---

##### `CustomCoreCount`<sup>Required</sup> <a name="CustomCoreCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```go
func CustomCoreCount() *f64
```

- *Type:* *f64

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```go
func NodeTypeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVmwareenginePrivateCloudManagementClusterOutputReference <a name="GoogleVmwareenginePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudManagementClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareenginePrivateCloudManagementClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs">PutNodeTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resetNodeTypeConfigs">ResetNodeTypeConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeTypeConfigs` <a name="PutNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs"></a>

```go
func PutNodeTypeConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNodeTypeConfigs` <a name="ResetNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.resetNodeTypeConfigs"></a>

```go
func ResetNodeTypeConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs">NodeTypeConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigsInput">NodeTypeConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeTypeConfigs`<sup>Required</sup> <a name="NodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs"></a>

```go
func NodeTypeConfigs() GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `NodeTypeConfigsInput`<sup>Optional</sup> <a name="NodeTypeConfigsInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigsInput"></a>

```go
func NodeTypeConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareenginePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudManagementCluster">GoogleVmwareenginePrivateCloudManagementCluster</a>

---


### GoogleVmwareenginePrivateCloudNetworkConfigOutputReference <a name="GoogleVmwareenginePrivateCloudNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareenginePrivateCloudNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resetVmwareEngineNetwork">ResetVmwareEngineNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVmwareEngineNetwork` <a name="ResetVmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resetVmwareEngineNetwork"></a>

```go
func ResetVmwareEngineNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion">ManagementIpAddressLayoutVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical">VmwareEngineNetworkCanonical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidrInput">ManagementCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkInput">VmwareEngineNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr">ManagementCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagementIpAddressLayoutVersion`<sup>Required</sup> <a name="ManagementIpAddressLayoutVersion" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion"></a>

```go
func ManagementIpAddressLayoutVersion() *f64
```

- *Type:* *f64

---

##### `VmwareEngineNetworkCanonical`<sup>Required</sup> <a name="VmwareEngineNetworkCanonical" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical"></a>

```go
func VmwareEngineNetworkCanonical() *string
```

- *Type:* *string

---

##### `ManagementCidrInput`<sup>Optional</sup> <a name="ManagementCidrInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidrInput"></a>

```go
func ManagementCidrInput() *string
```

- *Type:* *string

---

##### `VmwareEngineNetworkInput`<sup>Optional</sup> <a name="VmwareEngineNetworkInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkInput"></a>

```go
func VmwareEngineNetworkInput() *string
```

- *Type:* *string

---

##### `ManagementCidr`<sup>Required</sup> <a name="ManagementCidr" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr"></a>

```go
func ManagementCidr() *string
```

- *Type:* *string

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork"></a>

```go
func VmwareEngineNetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareenginePrivateCloudNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNetworkConfig">GoogleVmwareenginePrivateCloudNetworkConfig</a>

---


### GoogleVmwareenginePrivateCloudNsxList <a name="GoogleVmwareenginePrivateCloudNsxList" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudNsxList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVmwareenginePrivateCloudNsxList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.get"></a>

```go
func Get(index *f64) GoogleVmwareenginePrivateCloudNsxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVmwareenginePrivateCloudNsxOutputReference <a name="GoogleVmwareenginePrivateCloudNsxOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudNsxOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVmwareenginePrivateCloudNsxOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp">InternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsx">GoogleVmwareenginePrivateCloudNsx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp"></a>

```go
func InternalIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareenginePrivateCloudNsx
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudNsx">GoogleVmwareenginePrivateCloudNsx</a>

---


### GoogleVmwareenginePrivateCloudTimeoutsOutputReference <a name="GoogleVmwareenginePrivateCloudTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareenginePrivateCloudTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVmwareenginePrivateCloudVcenterList <a name="GoogleVmwareenginePrivateCloudVcenterList" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudVcenterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVmwareenginePrivateCloudVcenterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.get"></a>

```go
func Get(index *f64) GoogleVmwareenginePrivateCloudVcenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVmwareenginePrivateCloudVcenterOutputReference <a name="GoogleVmwareenginePrivateCloudVcenterOutputReference" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevmwareengineprivatecloud"

googlevmwareengineprivatecloud.NewGoogleVmwareenginePrivateCloudVcenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVmwareenginePrivateCloudVcenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp">InternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenter">GoogleVmwareenginePrivateCloudVcenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp"></a>

```go
func InternalIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareenginePrivateCloudVcenter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareenginePrivateCloud.GoogleVmwareenginePrivateCloudVcenter">GoogleVmwareenginePrivateCloudVcenter</a>

---



