# `googleDnsPolicy` Submodule <a name="`googleDnsPolicy` Submodule" id="@cdktf/provider-google-beta.googleDnsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsPolicy <a name="GoogleDnsPolicy" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy google_dns_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.NewGoogleDnsPolicy(scope Construct, id *string, config GoogleDnsPolicyConfig) GoogleDnsPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig">GoogleDnsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig">GoogleDnsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putAlternativeNameServerConfig">PutAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetAlternativeNameServerConfig">ResetAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetEnableInboundForwarding">ResetEnableInboundForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetNetworks">ResetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlternativeNameServerConfig` <a name="PutAlternativeNameServerConfig" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putAlternativeNameServerConfig"></a>

```go
func PutAlternativeNameServerConfig(value GoogleDnsPolicyAlternativeNameServerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putAlternativeNameServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a>

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDnsPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a>

---

##### `ResetAlternativeNameServerConfig` <a name="ResetAlternativeNameServerConfig" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetAlternativeNameServerConfig"></a>

```go
func ResetAlternativeNameServerConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableInboundForwarding` <a name="ResetEnableInboundForwarding" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetEnableInboundForwarding"></a>

```go
func ResetEnableInboundForwarding()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetNetworks"></a>

```go
func ResetNetworks()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDnsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.GoogleDnsPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.GoogleDnsPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.GoogleDnsPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.GoogleDnsPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDnsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDnsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDnsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDnsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.alternativeNameServerConfig">AlternativeNameServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference">GoogleDnsPolicyAlternativeNameServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList">GoogleDnsPolicyNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference">GoogleDnsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.alternativeNameServerConfigInput">AlternativeNameServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableInboundForwardingInput">EnableInboundForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableInboundForwarding">EnableInboundForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlternativeNameServerConfig`<sup>Required</sup> <a name="AlternativeNameServerConfig" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.alternativeNameServerConfig"></a>

```go
func AlternativeNameServerConfig() GoogleDnsPolicyAlternativeNameServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference">GoogleDnsPolicyAlternativeNameServerConfigOutputReference</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.networks"></a>

```go
func Networks() GoogleDnsPolicyNetworksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList">GoogleDnsPolicyNetworksList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleDnsPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference">GoogleDnsPolicyTimeoutsOutputReference</a>

---

##### `AlternativeNameServerConfigInput`<sup>Optional</sup> <a name="AlternativeNameServerConfigInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.alternativeNameServerConfigInput"></a>

```go
func AlternativeNameServerConfigInput() GoogleDnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableInboundForwardingInput`<sup>Optional</sup> <a name="EnableInboundForwardingInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableInboundForwardingInput"></a>

```go
func EnableInboundForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableInboundForwarding`<sup>Required</sup> <a name="EnableInboundForwarding" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableInboundForwarding"></a>

```go
func EnableInboundForwarding() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsPolicyAlternativeNameServerConfig <a name="GoogleDnsPolicyAlternativeNameServerConfig" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

&googlednspolicy.GoogleDnsPolicyAlternativeNameServerConfig {
	TargetNameServers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig.property.targetNameServers">TargetNameServers</a></code> | <code>interface{}</code> | target_name_servers block. |

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig.property.targetNameServers"></a>

```go
TargetNameServers interface{}
```

- *Type:* interface{}

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#target_name_servers GoogleDnsPolicy#target_name_servers}

---

### GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers <a name="GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

&googlednspolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers {
	Ipv4Address: *string,
	ForwardingPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | IPv4 address to forward to. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath">ForwardingPath</a></code> | <code>*string</code> | Forwarding path for this TargetNameServer. |

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address"></a>

```go
Ipv4Address *string
```

- *Type:* *string

IPv4 address to forward to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#ipv4_address GoogleDnsPolicy#ipv4_address}

---

##### `ForwardingPath`<sup>Optional</sup> <a name="ForwardingPath" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath"></a>

```go
ForwardingPath *string
```

- *Type:* *string

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#forwarding_path GoogleDnsPolicy#forwarding_path}

---

### GoogleDnsPolicyConfig <a name="GoogleDnsPolicyConfig" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

&googlednspolicy.GoogleDnsPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AlternativeNameServerConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig,
	Description: *string,
	EnableInboundForwarding: interface{},
	EnableLogging: interface{},
	Id: *string,
	Networks: interface{},
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDnsPolicy.GoogleDnsPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.name">Name</a></code> | <code>*string</code> | User assigned name for this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.alternativeNameServerConfig">AlternativeNameServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a></code> | alternative_name_server_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.enableInboundForwarding">EnableInboundForwarding</a></code> | <code>interface{}</code> | Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#id GoogleDnsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#project GoogleDnsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User assigned name for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#name GoogleDnsPolicy#name}

---

##### `AlternativeNameServerConfig`<sup>Optional</sup> <a name="AlternativeNameServerConfig" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.alternativeNameServerConfig"></a>

```go
AlternativeNameServerConfig GoogleDnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a>

alternative_name_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#alternative_name_server_config GoogleDnsPolicy#alternative_name_server_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#description GoogleDnsPolicy#description}

---

##### `EnableInboundForwarding`<sup>Optional</sup> <a name="EnableInboundForwarding" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.enableInboundForwarding"></a>

```go
EnableInboundForwarding interface{}
```

- *Type:* interface{}

Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections.

When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#enable_inbound_forwarding GoogleDnsPolicy#enable_inbound_forwarding}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#enable_logging GoogleDnsPolicy#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#id GoogleDnsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#networks GoogleDnsPolicy#networks}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#project GoogleDnsPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleDnsPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#timeouts GoogleDnsPolicy#timeouts}

---

### GoogleDnsPolicyNetworks <a name="GoogleDnsPolicyNetworks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

&googlednspolicy.GoogleDnsPolicyNetworks {
	NetworkUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks.property.networkUrl"></a>

```go
NetworkUrl *string
```

- *Type:* *string

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#network_url GoogleDnsPolicy#network_url}

---

### GoogleDnsPolicyTimeouts <a name="GoogleDnsPolicyTimeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

&googlednspolicy.GoogleDnsPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#create GoogleDnsPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#delete GoogleDnsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#update GoogleDnsPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#create GoogleDnsPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#delete GoogleDnsPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dns_policy#update GoogleDnsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsPolicyAlternativeNameServerConfigOutputReference <a name="GoogleDnsPolicyAlternativeNameServerConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.NewGoogleDnsPolicyAlternativeNameServerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsPolicyAlternativeNameServerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers">PutTargetNameServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNameServers` <a name="PutTargetNameServers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers"></a>

```go
func PutTargetNameServers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers">TargetNameServers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput">TargetNameServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers"></a>

```go
func TargetNameServers() GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList</a>

---

##### `TargetNameServersInput`<sup>Optional</sup> <a name="TargetNameServersInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput"></a>

```go
func TargetNameServersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a>

---


### GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList <a name="GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.NewGoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.get"></a>

```go
func Get(index *f64) GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference <a name="GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.NewGoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath">ResetForwardingPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardingPath` <a name="ResetForwardingPath" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```go
func ResetForwardingPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput">ForwardingPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath">ForwardingPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardingPathInput`<sup>Optional</sup> <a name="ForwardingPathInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```go
func ForwardingPathInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```go
func Ipv4AddressInput() *string
```

- *Type:* *string

---

##### `ForwardingPath`<sup>Required</sup> <a name="ForwardingPath" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```go
func ForwardingPath() *string
```

- *Type:* *string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsPolicyNetworksList <a name="GoogleDnsPolicyNetworksList" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.NewGoogleDnsPolicyNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDnsPolicyNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.get"></a>

```go
func Get(index *f64) GoogleDnsPolicyNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsPolicyNetworksOutputReference <a name="GoogleDnsPolicyNetworksOutputReference" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.NewGoogleDnsPolicyNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDnsPolicyNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.networkUrlInput"></a>

```go
func NetworkUrlInput() *string
```

- *Type:* *string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.networkUrl"></a>

```go
func NetworkUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDnsPolicyTimeoutsOutputReference <a name="GoogleDnsPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlednspolicy"

googlednspolicy.NewGoogleDnsPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDnsPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



