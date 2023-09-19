# `google_identity_platform_config`

Refer to the Terraform Registory for docs: [`google_identity_platform_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config).

# `googleIdentityPlatformConfig` Submodule <a name="`googleIdentityPlatformConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformConfig <a name="GoogleIdentityPlatformConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config google_identity_platform_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.NewGoogleIdentityPlatformConfig(scope Construct, id *string, config GoogleIdentityPlatformConfigConfig) GoogleIdentityPlatformConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig">GoogleIdentityPlatformConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig">GoogleIdentityPlatformConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putBlockingFunctions">PutBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetAuthorizedDomains">ResetAuthorizedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetAutodeleteAnonymousUsers">ResetAutodeleteAnonymousUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetBlockingFunctions">ResetBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBlockingFunctions` <a name="PutBlockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putBlockingFunctions"></a>

```go
func PutBlockingFunctions(value GoogleIdentityPlatformConfigBlockingFunctions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putBlockingFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a>

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putQuota"></a>

```go
func PutQuota(value GoogleIdentityPlatformConfigQuota)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIdentityPlatformConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a>

---

##### `ResetAuthorizedDomains` <a name="ResetAuthorizedDomains" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetAuthorizedDomains"></a>

```go
func ResetAuthorizedDomains()
```

##### `ResetAutodeleteAnonymousUsers` <a name="ResetAutodeleteAnonymousUsers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetAutodeleteAnonymousUsers"></a>

```go
func ResetAutodeleteAnonymousUsers()
```

##### `ResetBlockingFunctions` <a name="ResetBlockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetBlockingFunctions"></a>

```go
func ResetBlockingFunctions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetQuota"></a>

```go
func ResetQuota()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.GoogleIdentityPlatformConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.GoogleIdentityPlatformConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.GoogleIdentityPlatformConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.blockingFunctions">BlockingFunctions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference">GoogleIdentityPlatformConfigBlockingFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference">GoogleIdentityPlatformConfigQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference">GoogleIdentityPlatformConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.authorizedDomainsInput">AuthorizedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.autodeleteAnonymousUsersInput">AutodeleteAnonymousUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.blockingFunctionsInput">BlockingFunctionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.quotaInput">QuotaInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.authorizedDomains">AuthorizedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.autodeleteAnonymousUsers">AutodeleteAnonymousUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockingFunctions`<sup>Required</sup> <a name="BlockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.blockingFunctions"></a>

```go
func BlockingFunctions() GoogleIdentityPlatformConfigBlockingFunctionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference">GoogleIdentityPlatformConfigBlockingFunctionsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.quota"></a>

```go
func Quota() GoogleIdentityPlatformConfigQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference">GoogleIdentityPlatformConfigQuotaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.timeouts"></a>

```go
func Timeouts() GoogleIdentityPlatformConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference">GoogleIdentityPlatformConfigTimeoutsOutputReference</a>

---

##### `AuthorizedDomainsInput`<sup>Optional</sup> <a name="AuthorizedDomainsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.authorizedDomainsInput"></a>

```go
func AuthorizedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutodeleteAnonymousUsersInput`<sup>Optional</sup> <a name="AutodeleteAnonymousUsersInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.autodeleteAnonymousUsersInput"></a>

```go
func AutodeleteAnonymousUsersInput() interface{}
```

- *Type:* interface{}

---

##### `BlockingFunctionsInput`<sup>Optional</sup> <a name="BlockingFunctionsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.blockingFunctionsInput"></a>

```go
func BlockingFunctionsInput() GoogleIdentityPlatformConfigBlockingFunctions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.quotaInput"></a>

```go
func QuotaInput() GoogleIdentityPlatformConfigQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizedDomains`<sup>Required</sup> <a name="AuthorizedDomains" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.authorizedDomains"></a>

```go
func AuthorizedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `AutodeleteAnonymousUsers`<sup>Required</sup> <a name="AutodeleteAnonymousUsers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.autodeleteAnonymousUsers"></a>

```go
func AutodeleteAnonymousUsers() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformConfigBlockingFunctions <a name="GoogleIdentityPlatformConfigBlockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

&googleidentityplatformconfig.GoogleIdentityPlatformConfigBlockingFunctions {
	Triggers: interface{},
	ForwardInboundCredentials: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.property.triggers">Triggers</a></code> | <code>interface{}</code> | triggers block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials">ForwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | forward_inbound_credentials block. |

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.property.triggers"></a>

```go
Triggers interface{}
```

- *Type:* interface{}

triggers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#triggers GoogleIdentityPlatformConfig#triggers}

---

##### `ForwardInboundCredentials`<sup>Optional</sup> <a name="ForwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials"></a>

```go
ForwardInboundCredentials GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

forward_inbound_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#forward_inbound_credentials GoogleIdentityPlatformConfig#forward_inbound_credentials}

---

### GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials <a name="GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

&googleidentityplatformconfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials {
	AccessToken: interface{},
	IdToken: interface{},
	RefreshToken: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken">AccessToken</a></code> | <code>interface{}</code> | Whether to pass the user's OAuth identity provider's access token. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken">IdToken</a></code> | <code>interface{}</code> | Whether to pass the user's OIDC identity provider's ID token. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken">RefreshToken</a></code> | <code>interface{}</code> | Whether to pass the user's OAuth identity provider's refresh token. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken"></a>

```go
AccessToken interface{}
```

- *Type:* interface{}

Whether to pass the user's OAuth identity provider's access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#access_token GoogleIdentityPlatformConfig#access_token}

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken"></a>

```go
IdToken interface{}
```

- *Type:* interface{}

Whether to pass the user's OIDC identity provider's ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#id_token GoogleIdentityPlatformConfig#id_token}

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken"></a>

```go
RefreshToken interface{}
```

- *Type:* interface{}

Whether to pass the user's OAuth identity provider's refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#refresh_token GoogleIdentityPlatformConfig#refresh_token}

---

### GoogleIdentityPlatformConfigBlockingFunctionsTriggers <a name="GoogleIdentityPlatformConfigBlockingFunctionsTriggers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

&googleidentityplatformconfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers {
	EventType: *string,
	FunctionUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.property.eventType">EventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#event_type GoogleIdentityPlatformConfig#event_type}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri">FunctionUri</a></code> | <code>*string</code> | HTTP URI trigger for the Cloud Function. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#event_type GoogleIdentityPlatformConfig#event_type}.

---

##### `FunctionUri`<sup>Required</sup> <a name="FunctionUri" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri"></a>

```go
FunctionUri *string
```

- *Type:* *string

HTTP URI trigger for the Cloud Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#function_uri GoogleIdentityPlatformConfig#function_uri}

---

### GoogleIdentityPlatformConfigConfig <a name="GoogleIdentityPlatformConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

&googleidentityplatformconfig.GoogleIdentityPlatformConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizedDomains: *[]*string,
	AutodeleteAnonymousUsers: interface{},
	BlockingFunctions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions,
	Id: *string,
	Project: *string,
	Quota: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.authorizedDomains">AuthorizedDomains</a></code> | <code>*[]*string</code> | List of domains authorized for OAuth redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.autodeleteAnonymousUsers">AutodeleteAnonymousUsers</a></code> | <code>interface{}</code> | Whether anonymous users will be auto-deleted after a period of 30 days. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.blockingFunctions">BlockingFunctions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a></code> | blocking_functions block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#id GoogleIdentityPlatformConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#project GoogleIdentityPlatformConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizedDomains`<sup>Optional</sup> <a name="AuthorizedDomains" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.authorizedDomains"></a>

```go
AuthorizedDomains *[]*string
```

- *Type:* *[]*string

List of domains authorized for OAuth redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#authorized_domains GoogleIdentityPlatformConfig#authorized_domains}

---

##### `AutodeleteAnonymousUsers`<sup>Optional</sup> <a name="AutodeleteAnonymousUsers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.autodeleteAnonymousUsers"></a>

```go
AutodeleteAnonymousUsers interface{}
```

- *Type:* interface{}

Whether anonymous users will be auto-deleted after a period of 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#autodelete_anonymous_users GoogleIdentityPlatformConfig#autodelete_anonymous_users}

---

##### `BlockingFunctions`<sup>Optional</sup> <a name="BlockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.blockingFunctions"></a>

```go
BlockingFunctions GoogleIdentityPlatformConfigBlockingFunctions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a>

blocking_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#blocking_functions GoogleIdentityPlatformConfig#blocking_functions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#id GoogleIdentityPlatformConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#project GoogleIdentityPlatformConfig#project}.

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.quota"></a>

```go
Quota GoogleIdentityPlatformConfigQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#quota GoogleIdentityPlatformConfig#quota}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleIdentityPlatformConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#timeouts GoogleIdentityPlatformConfig#timeouts}

---

### GoogleIdentityPlatformConfigQuota <a name="GoogleIdentityPlatformConfigQuota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

&googleidentityplatformconfig.GoogleIdentityPlatformConfigQuota {
	SignUpQuotaConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota.property.signUpQuotaConfig">SignUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | sign_up_quota_config block. |

---

##### `SignUpQuotaConfig`<sup>Optional</sup> <a name="SignUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota.property.signUpQuotaConfig"></a>

```go
SignUpQuotaConfig GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a>

sign_up_quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#sign_up_quota_config GoogleIdentityPlatformConfig#sign_up_quota_config}

---

### GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig <a name="GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

&googleidentityplatformconfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig {
	Quota: *f64,
	QuotaDuration: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota">Quota</a></code> | <code>*f64</code> | A sign up APIs quota that customers can override temporarily. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration">QuotaDuration</a></code> | <code>*string</code> | How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime">StartTime</a></code> | <code>*string</code> | When this quota will take affect. |

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota"></a>

```go
Quota *f64
```

- *Type:* *f64

A sign up APIs quota that customers can override temporarily.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#quota GoogleIdentityPlatformConfig#quota}

---

##### `QuotaDuration`<sup>Optional</sup> <a name="QuotaDuration" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration"></a>

```go
QuotaDuration *string
```

- *Type:* *string

How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#quota_duration GoogleIdentityPlatformConfig#quota_duration}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

When this quota will take affect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#start_time GoogleIdentityPlatformConfig#start_time}

---

### GoogleIdentityPlatformConfigTimeouts <a name="GoogleIdentityPlatformConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

&googleidentityplatformconfig.GoogleIdentityPlatformConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#create GoogleIdentityPlatformConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#delete GoogleIdentityPlatformConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#update GoogleIdentityPlatformConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#create GoogleIdentityPlatformConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#delete GoogleIdentityPlatformConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_identity_platform_config#update GoogleIdentityPlatformConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference <a name="GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.NewGoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken">ResetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken"></a>

```go
func ResetIdToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken"></a>

```go
func ResetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken">AccessToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken">IdToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() interface{}
```

- *Type:* interface{}

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput"></a>

```go
func IdTokenInput() interface{}
```

- *Type:* interface{}

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput"></a>

```go
func RefreshTokenInput() interface{}
```

- *Type:* interface{}

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken"></a>

```go
func AccessToken() interface{}
```

- *Type:* interface{}

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken"></a>

```go
func IdToken() interface{}
```

- *Type:* interface{}

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken"></a>

```go
func RefreshToken() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---


### GoogleIdentityPlatformConfigBlockingFunctionsOutputReference <a name="GoogleIdentityPlatformConfigBlockingFunctionsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.NewGoogleIdentityPlatformConfigBlockingFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformConfigBlockingFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials">PutForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers">PutTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials">ResetForwardInboundCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardInboundCredentials` <a name="PutForwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials"></a>

```go
func PutForwardInboundCredentials(value GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `PutTriggers` <a name="PutTriggers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers"></a>

```go
func PutTriggers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetForwardInboundCredentials` <a name="ResetForwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials"></a>

```go
func ResetForwardInboundCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials">ForwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers">Triggers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList">GoogleIdentityPlatformConfigBlockingFunctionsTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput">ForwardInboundCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput">TriggersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardInboundCredentials`<sup>Required</sup> <a name="ForwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials"></a>

```go
func ForwardInboundCredentials() GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a>

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers"></a>

```go
func Triggers() GoogleIdentityPlatformConfigBlockingFunctionsTriggersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList">GoogleIdentityPlatformConfigBlockingFunctionsTriggersList</a>

---

##### `ForwardInboundCredentialsInput`<sup>Optional</sup> <a name="ForwardInboundCredentialsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput"></a>

```go
func ForwardInboundCredentialsInput() GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput"></a>

```go
func TriggersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformConfigBlockingFunctions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a>

---


### GoogleIdentityPlatformConfigBlockingFunctionsTriggersList <a name="GoogleIdentityPlatformConfigBlockingFunctionsTriggersList" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.NewGoogleIdentityPlatformConfigBlockingFunctionsTriggersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIdentityPlatformConfigBlockingFunctionsTriggersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.get"></a>

```go
func Get(index *f64) GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference <a name="GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.NewGoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput">FunctionUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri">FunctionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `FunctionUriInput`<sup>Optional</sup> <a name="FunctionUriInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput"></a>

```go
func FunctionUriInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `FunctionUri`<sup>Required</sup> <a name="FunctionUri" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri"></a>

```go
func FunctionUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIdentityPlatformConfigQuotaOutputReference <a name="GoogleIdentityPlatformConfigQuotaOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.NewGoogleIdentityPlatformConfigQuotaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformConfigQuotaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig">PutSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig">ResetSignUpQuotaConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSignUpQuotaConfig` <a name="PutSignUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig"></a>

```go
func PutSignUpQuotaConfig(value GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `ResetSignUpQuotaConfig` <a name="ResetSignUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig"></a>

```go
func ResetSignUpQuotaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig">SignUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput">SignUpQuotaConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SignUpQuotaConfig`<sup>Required</sup> <a name="SignUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig"></a>

```go
func SignUpQuotaConfig() GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a>

---

##### `SignUpQuotaConfigInput`<sup>Optional</sup> <a name="SignUpQuotaConfigInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput"></a>

```go
func SignUpQuotaConfigInput() GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformConfigQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a>

---


### GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference <a name="GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.NewGoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration">ResetQuotaDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota"></a>

```go
func ResetQuota()
```

##### `ResetQuotaDuration` <a name="ResetQuotaDuration" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration"></a>

```go
func ResetQuotaDuration()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput">QuotaDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput">QuotaInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota">Quota</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration">QuotaDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QuotaDurationInput`<sup>Optional</sup> <a name="QuotaDurationInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput"></a>

```go
func QuotaDurationInput() *string
```

- *Type:* *string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput"></a>

```go
func QuotaInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota"></a>

```go
func Quota() *f64
```

- *Type:* *f64

---

##### `QuotaDuration`<sup>Required</sup> <a name="QuotaDuration" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration"></a>

```go
func QuotaDuration() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---


### GoogleIdentityPlatformConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformconfig"

googleidentityplatformconfig.NewGoogleIdentityPlatformConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



