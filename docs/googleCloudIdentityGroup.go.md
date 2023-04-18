# `google_cloud_identity_group`

Refer to the Terraform Registory for docs: [`google_cloud_identity_group`](https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group).

# `googleCloudIdentityGroup` Submodule <a name="`googleCloudIdentityGroup` Submodule" id="@cdktf/provider-google-beta.googleCloudIdentityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityGroup <a name="GoogleCloudIdentityGroup" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group google_cloud_identity_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroup"

googlecloudidentitygroup.NewGoogleCloudIdentityGroup(scope Construct, id *string, config GoogleCloudIdentityGroupConfig) GoogleCloudIdentityGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig">GoogleCloudIdentityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig">GoogleCloudIdentityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.putGroupKey">PutGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetInitialGroupConfig">ResetInitialGroupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGroupKey` <a name="PutGroupKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.putGroupKey"></a>

```go
func PutGroupKey(value GoogleCloudIdentityGroupGroupKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.putGroupKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey">GoogleCloudIdentityGroupGroupKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudIdentityGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts">GoogleCloudIdentityGroupTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialGroupConfig` <a name="ResetInitialGroupConfig" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetInitialGroupConfig"></a>

```go
func ResetInitialGroupConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroup"

googlecloudidentitygroup.GoogleCloudIdentityGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroup"

googlecloudidentitygroup.GoogleCloudIdentityGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroup"

googlecloudidentitygroup.GoogleCloudIdentityGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.groupKey">GroupKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference">GoogleCloudIdentityGroupGroupKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference">GoogleCloudIdentityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.groupKeyInput">GroupKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey">GoogleCloudIdentityGroupGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.initialGroupConfigInput">InitialGroupConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.initialGroupConfig">InitialGroupConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.groupKey"></a>

```go
func GroupKey() GoogleCloudIdentityGroupGroupKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference">GoogleCloudIdentityGroupGroupKeyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.timeouts"></a>

```go
func Timeouts() GoogleCloudIdentityGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference">GoogleCloudIdentityGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GroupKeyInput`<sup>Optional</sup> <a name="GroupKeyInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.groupKeyInput"></a>

```go
func GroupKeyInput() GoogleCloudIdentityGroupGroupKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey">GoogleCloudIdentityGroupGroupKey</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialGroupConfigInput`<sup>Optional</sup> <a name="InitialGroupConfigInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.initialGroupConfigInput"></a>

```go
func InitialGroupConfigInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialGroupConfig`<sup>Required</sup> <a name="InitialGroupConfig" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.initialGroupConfig"></a>

```go
func InitialGroupConfig() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityGroupConfig <a name="GoogleCloudIdentityGroupConfig" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroup"

&googlecloudidentitygroup.GoogleCloudIdentityGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupKey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey,
	Labels: *map[string]*string,
	Parent: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	InitialGroupConfig: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.groupKey">GroupKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey">GoogleCloudIdentityGroupGroupKey</a></code> | group_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | One or more label entries that apply to the Group. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.parent">Parent</a></code> | <code>*string</code> | The resource name of the entity under which this Group resides in the Cloud Identity resource hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.description">Description</a></code> | <code>*string</code> | An extended description to help users determine the purpose of a Group. Must not be longer than 4,096 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Group. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#id GoogleCloudIdentityGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.initialGroupConfig">InitialGroupConfig</a></code> | <code>*string</code> | The initial configuration options for creating a Group. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts">GoogleCloudIdentityGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.groupKey"></a>

```go
GroupKey GoogleCloudIdentityGroupGroupKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey">GoogleCloudIdentityGroupGroupKey</a>

group_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#group_key GoogleCloudIdentityGroup#group_key}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

One or more label entries that apply to the Group.

Currently supported labels contain a key with an empty value.

Google Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value.

Existing Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added.

Dynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic.

Identity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#labels GoogleCloudIdentityGroup#labels}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The resource name of the entity under which this Group resides in the Cloud Identity resource hierarchy.

Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#parent GoogleCloudIdentityGroup#parent}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An extended description to help users determine the purpose of a Group. Must not be longer than 4,096 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#description GoogleCloudIdentityGroup#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#display_name GoogleCloudIdentityGroup#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#id GoogleCloudIdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialGroupConfig`<sup>Optional</sup> <a name="InitialGroupConfig" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.initialGroupConfig"></a>

```go
InitialGroupConfig *string
```

- *Type:* *string

The initial configuration options for creating a Group.

See the
[API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)
for possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#initial_group_config GoogleCloudIdentityGroup#initial_group_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudIdentityGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts">GoogleCloudIdentityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#timeouts GoogleCloudIdentityGroup#timeouts}

---

### GoogleCloudIdentityGroupGroupKey <a name="GoogleCloudIdentityGroupGroupKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroup"

&googlecloudidentitygroup.GoogleCloudIdentityGroupGroupKey {
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey.property.id">Id</a></code> | <code>*string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace in which the entity exists. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#id GoogleCloudIdentityGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#namespace GoogleCloudIdentityGroup#namespace}

---

### GoogleCloudIdentityGroupTimeouts <a name="GoogleCloudIdentityGroupTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroup"

&googlecloudidentitygroup.GoogleCloudIdentityGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#create GoogleCloudIdentityGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#delete GoogleCloudIdentityGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#update GoogleCloudIdentityGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#create GoogleCloudIdentityGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#delete GoogleCloudIdentityGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group#update GoogleCloudIdentityGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityGroupGroupKeyOutputReference <a name="GoogleCloudIdentityGroupGroupKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroup"

googlecloudidentitygroup.NewGoogleCloudIdentityGroupGroupKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudIdentityGroupGroupKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey">GoogleCloudIdentityGroupGroupKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudIdentityGroupGroupKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupGroupKey">GoogleCloudIdentityGroupGroupKey</a>

---


### GoogleCloudIdentityGroupTimeoutsOutputReference <a name="GoogleCloudIdentityGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroup"

googlecloudidentitygroup.NewGoogleCloudIdentityGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudIdentityGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroup.GoogleCloudIdentityGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



