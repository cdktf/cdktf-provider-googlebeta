# `googleIntegrationsClient` Submodule <a name="`googleIntegrationsClient` Submodule" id="@cdktf/provider-google-beta.googleIntegrationsClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationsClient <a name="GoogleIntegrationsClient" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client google_integrations_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

googleintegrationsclient.NewGoogleIntegrationsClient(scope Construct, id *string, config GoogleIntegrationsClientConfig) GoogleIntegrationsClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig">GoogleIntegrationsClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig">GoogleIntegrationsClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig">PutCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCloudKmsConfig">ResetCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCreateSampleIntegrations">ResetCreateSampleIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetRunAsServiceAccount">ResetRunAsServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudKmsConfig` <a name="PutCloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig"></a>

```go
func PutCloudKmsConfig(value GoogleIntegrationsClientCloudKmsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIntegrationsClientTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>

---

##### `ResetCloudKmsConfig` <a name="ResetCloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCloudKmsConfig"></a>

```go
func ResetCloudKmsConfig()
```

##### `ResetCreateSampleIntegrations` <a name="ResetCreateSampleIntegrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCreateSampleIntegrations"></a>

```go
func ResetCreateSampleIntegrations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRunAsServiceAccount` <a name="ResetRunAsServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetRunAsServiceAccount"></a>

```go
func ResetRunAsServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIntegrationsClient resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

googleintegrationsclient.GoogleIntegrationsClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

googleintegrationsclient.GoogleIntegrationsClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

googleintegrationsclient.GoogleIntegrationsClient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

googleintegrationsclient.GoogleIntegrationsClient_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIntegrationsClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIntegrationsClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIntegrationsClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationsClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfig">CloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference">GoogleIntegrationsClientCloudKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference">GoogleIntegrationsClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfigInput">CloudKmsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrationsInput">CreateSampleIntegrationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccountInput">RunAsServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrations">CreateSampleIntegrations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccount">RunAsServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudKmsConfig`<sup>Required</sup> <a name="CloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfig"></a>

```go
func CloudKmsConfig() GoogleIntegrationsClientCloudKmsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference">GoogleIntegrationsClientCloudKmsConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeouts"></a>

```go
func Timeouts() GoogleIntegrationsClientTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference">GoogleIntegrationsClientTimeoutsOutputReference</a>

---

##### `CloudKmsConfigInput`<sup>Optional</sup> <a name="CloudKmsConfigInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfigInput"></a>

```go
func CloudKmsConfigInput() GoogleIntegrationsClientCloudKmsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

---

##### `CreateSampleIntegrationsInput`<sup>Optional</sup> <a name="CreateSampleIntegrationsInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrationsInput"></a>

```go
func CreateSampleIntegrationsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RunAsServiceAccountInput`<sup>Optional</sup> <a name="RunAsServiceAccountInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccountInput"></a>

```go
func RunAsServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CreateSampleIntegrations`<sup>Required</sup> <a name="CreateSampleIntegrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrations"></a>

```go
func CreateSampleIntegrations() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RunAsServiceAccount`<sup>Required</sup> <a name="RunAsServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccount"></a>

```go
func RunAsServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationsClientCloudKmsConfig <a name="GoogleIntegrationsClientCloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

&googleintegrationsclient.GoogleIntegrationsClientCloudKmsConfig {
	Key: *string,
	KmsLocation: *string,
	KmsRing: *string,
	KeyVersion: *string,
	KmsProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.key">Key</a></code> | <code>*string</code> | A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsLocation">KmsLocation</a></code> | <code>*string</code> | Location name of the key ring, e.g. "us-west1". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsRing">KmsRing</a></code> | <code>*string</code> | A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.keyVersion">KeyVersion</a></code> | <code>*string</code> | Each version of a key contains key material used for encryption or signing. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsProjectId">KmsProjectId</a></code> | <code>*string</code> | The Google Cloud project id of the project where the kms key stored. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key.

A key exists on exactly one key ring tied to a
specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#key GoogleIntegrationsClient#key}

---

##### `KmsLocation`<sup>Required</sup> <a name="KmsLocation" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsLocation"></a>

```go
KmsLocation *string
```

- *Type:* *string

Location name of the key ring, e.g. "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#kms_location GoogleIntegrationsClient#kms_location}

---

##### `KmsRing`<sup>Required</sup> <a name="KmsRing" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsRing"></a>

```go
KmsRing *string
```

- *Type:* *string

A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys.

A key ring's name does not need to be
unique across a Google Cloud project, but must be unique within a given location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#kms_ring GoogleIntegrationsClient#kms_ring}

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.keyVersion"></a>

```go
KeyVersion *string
```

- *Type:* *string

Each version of a key contains key material used for encryption or signing.

A key's version is represented by an integer, starting at 1. To decrypt data
or verify a signature, you must use the same key version that was used to
encrypt or sign the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#key_version GoogleIntegrationsClient#key_version}

---

##### `KmsProjectId`<sup>Optional</sup> <a name="KmsProjectId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsProjectId"></a>

```go
KmsProjectId *string
```

- *Type:* *string

The Google Cloud project id of the project where the kms key stored.

If empty,
the kms key is stored at the same project as customer's project and ecrypted
with CMEK, otherwise, the kms key is stored in the tenant project and
encrypted with GMEK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#kms_project_id GoogleIntegrationsClient#kms_project_id}

---

### GoogleIntegrationsClientConfig <a name="GoogleIntegrationsClientConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

&googleintegrationsclient.GoogleIntegrationsClientConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	CloudKmsConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig,
	CreateSampleIntegrations: interface{},
	Id: *string,
	Project: *string,
	RunAsServiceAccount: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIntegrationsClient.GoogleIntegrationsClientTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.location">Location</a></code> | <code>*string</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.cloudKmsConfig">CloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | cloud_kms_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.createSampleIntegrations">CreateSampleIntegrations</a></code> | <code>interface{}</code> | Indicates if sample integrations should be created along with provisioning. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#id GoogleIntegrationsClient#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#project GoogleIntegrationsClient#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.runAsServiceAccount">RunAsServiceAccount</a></code> | <code>*string</code> | User input run-as service account, if empty, will bring up a new default service account. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#location GoogleIntegrationsClient#location}

---

##### `CloudKmsConfig`<sup>Optional</sup> <a name="CloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.cloudKmsConfig"></a>

```go
CloudKmsConfig GoogleIntegrationsClientCloudKmsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#cloud_kms_config GoogleIntegrationsClient#cloud_kms_config}

---

##### `CreateSampleIntegrations`<sup>Optional</sup> <a name="CreateSampleIntegrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.createSampleIntegrations"></a>

```go
CreateSampleIntegrations interface{}
```

- *Type:* interface{}

Indicates if sample integrations should be created along with provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#create_sample_integrations GoogleIntegrationsClient#create_sample_integrations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#id GoogleIntegrationsClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#project GoogleIntegrationsClient#project}.

---

##### `RunAsServiceAccount`<sup>Optional</sup> <a name="RunAsServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.runAsServiceAccount"></a>

```go
RunAsServiceAccount *string
```

- *Type:* *string

User input run-as service account, if empty, will bring up a new default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#run_as_service_account GoogleIntegrationsClient#run_as_service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.timeouts"></a>

```go
Timeouts GoogleIntegrationsClientTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#timeouts GoogleIntegrationsClient#timeouts}

---

### GoogleIntegrationsClientTimeouts <a name="GoogleIntegrationsClientTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

&googleintegrationsclient.GoogleIntegrationsClientTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#create GoogleIntegrationsClient#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#delete GoogleIntegrationsClient#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#create GoogleIntegrationsClient#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_integrations_client#delete GoogleIntegrationsClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationsClientCloudKmsConfigOutputReference <a name="GoogleIntegrationsClientCloudKmsConfigOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

googleintegrationsclient.NewGoogleIntegrationsClientCloudKmsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIntegrationsClientCloudKmsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId">ResetKmsProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion"></a>

```go
func ResetKeyVersion()
```

##### `ResetKmsProjectId` <a name="ResetKmsProjectId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId"></a>

```go
func ResetKmsProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput">KeyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput">KmsLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput">KmsProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput">KmsRingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersion">KeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation">KmsLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId">KmsProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRing">KmsRing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput"></a>

```go
func KeyVersionInput() *string
```

- *Type:* *string

---

##### `KmsLocationInput`<sup>Optional</sup> <a name="KmsLocationInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput"></a>

```go
func KmsLocationInput() *string
```

- *Type:* *string

---

##### `KmsProjectIdInput`<sup>Optional</sup> <a name="KmsProjectIdInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput"></a>

```go
func KmsProjectIdInput() *string
```

- *Type:* *string

---

##### `KmsRingInput`<sup>Optional</sup> <a name="KmsRingInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput"></a>

```go
func KmsRingInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersion"></a>

```go
func KeyVersion() *string
```

- *Type:* *string

---

##### `KmsLocation`<sup>Required</sup> <a name="KmsLocation" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation"></a>

```go
func KmsLocation() *string
```

- *Type:* *string

---

##### `KmsProjectId`<sup>Required</sup> <a name="KmsProjectId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId"></a>

```go
func KmsProjectId() *string
```

- *Type:* *string

---

##### `KmsRing`<sup>Required</sup> <a name="KmsRing" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRing"></a>

```go
func KmsRing() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIntegrationsClientCloudKmsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

---


### GoogleIntegrationsClientTimeoutsOutputReference <a name="GoogleIntegrationsClientTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleintegrationsclient"

googleintegrationsclient.NewGoogleIntegrationsClientTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIntegrationsClientTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



