# `dataGoogleFirebaseHostingChannel` Submodule <a name="`dataGoogleFirebaseHostingChannel` Submodule" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirebaseHostingChannel <a name="DataGoogleFirebaseHostingChannel" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_firebase_hosting_channel google_firebase_hosting_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasehostingchannel"

datagooglefirebasehostingchannel.NewDataGoogleFirebaseHostingChannel(scope Construct, id *string, config DataGoogleFirebaseHostingChannelConfig) DataGoogleFirebaseHostingChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig">DataGoogleFirebaseHostingChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig">DataGoogleFirebaseHostingChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFirebaseHostingChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasehostingchannel"

datagooglefirebasehostingchannel.DataGoogleFirebaseHostingChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasehostingchannel"

datagooglefirebasehostingchannel.DataGoogleFirebaseHostingChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasehostingchannel"

datagooglefirebasehostingchannel.DataGoogleFirebaseHostingChannel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasehostingchannel"

datagooglefirebasehostingchannel.DataGoogleFirebaseHostingChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleFirebaseHostingChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleFirebaseHostingChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleFirebaseHostingChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_firebase_hosting_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFirebaseHostingChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.retainedReleaseCount">RetainedReleaseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.siteIdInput">SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetainedReleaseCount`<sup>Required</sup> <a name="RetainedReleaseCount" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.retainedReleaseCount"></a>

```go
func RetainedReleaseCount() *f64
```

- *Type:* *f64

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.siteIdInput"></a>

```go
func SiteIdInput() *string
```

- *Type:* *string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirebaseHostingChannelConfig <a name="DataGoogleFirebaseHostingChannelConfig" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasehostingchannel"

&datagooglefirebasehostingchannel.DataGoogleFirebaseHostingChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelId: *string,
	SiteId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.channelId">ChannelId</a></code> | <code>*string</code> | Required. Immutable. A unique ID within the site that identifies the channel. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.siteId">SiteId</a></code> | <code>*string</code> | Required. The ID of the site in which to create this channel. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_firebase_hosting_channel#id DataGoogleFirebaseHostingChannel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

Required. Immutable. A unique ID within the site that identifies the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_firebase_hosting_channel#channel_id DataGoogleFirebaseHostingChannel#channel_id}

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.siteId"></a>

```go
SiteId *string
```

- *Type:* *string

Required. The ID of the site in which to create this channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_firebase_hosting_channel#site_id DataGoogleFirebaseHostingChannel#site_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_firebase_hosting_channel#id DataGoogleFirebaseHostingChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



