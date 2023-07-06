# `google_dataform_repository`

Refer to the Terraform Registory for docs: [`google_dataform_repository`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository).

# `googleDataformRepository` Submodule <a name="`googleDataformRepository` Submodule" id="@cdktf/provider-google-beta.googleDataformRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataformRepository <a name="GoogleDataformRepository" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository google_dataform_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

googledataformrepository.NewGoogleDataformRepository(scope Construct, id *string, config GoogleDataformRepositoryConfig) GoogleDataformRepository
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig">GoogleDataformRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig">GoogleDataformRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putGitRemoteSettings">PutGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putWorkspaceCompilationOverrides">PutWorkspaceCompilationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetGitRemoteSettings">ResetGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetWorkspaceCompilationOverrides">ResetWorkspaceCompilationOverrides</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGitRemoteSettings` <a name="PutGitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putGitRemoteSettings"></a>

```go
func PutGitRemoteSettings(value GoogleDataformRepositoryGitRemoteSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putGitRemoteSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataformRepositoryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts">GoogleDataformRepositoryTimeouts</a>

---

##### `PutWorkspaceCompilationOverrides` <a name="PutWorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putWorkspaceCompilationOverrides"></a>

```go
func PutWorkspaceCompilationOverrides(value GoogleDataformRepositoryWorkspaceCompilationOverrides)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putWorkspaceCompilationOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a>

---

##### `ResetGitRemoteSettings` <a name="ResetGitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetGitRemoteSettings"></a>

```go
func ResetGitRemoteSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkspaceCompilationOverrides` <a name="ResetWorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetWorkspaceCompilationOverrides"></a>

```go
func ResetWorkspaceCompilationOverrides()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

googledataformrepository.GoogleDataformRepository_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

googledataformrepository.GoogleDataformRepository_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

googledataformrepository.GoogleDataformRepository_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.gitRemoteSettings">GitRemoteSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference">GoogleDataformRepositoryGitRemoteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference">GoogleDataformRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.workspaceCompilationOverrides">WorkspaceCompilationOverrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference">GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.gitRemoteSettingsInput">GitRemoteSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.workspaceCompilationOverridesInput">WorkspaceCompilationOverridesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GitRemoteSettings`<sup>Required</sup> <a name="GitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.gitRemoteSettings"></a>

```go
func GitRemoteSettings() GoogleDataformRepositoryGitRemoteSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference">GoogleDataformRepositoryGitRemoteSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.timeouts"></a>

```go
func Timeouts() GoogleDataformRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference">GoogleDataformRepositoryTimeoutsOutputReference</a>

---

##### `WorkspaceCompilationOverrides`<sup>Required</sup> <a name="WorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.workspaceCompilationOverrides"></a>

```go
func WorkspaceCompilationOverrides() GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference">GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference</a>

---

##### `GitRemoteSettingsInput`<sup>Optional</sup> <a name="GitRemoteSettingsInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.gitRemoteSettingsInput"></a>

```go
func GitRemoteSettingsInput() GoogleDataformRepositoryGitRemoteSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceCompilationOverridesInput`<sup>Optional</sup> <a name="WorkspaceCompilationOverridesInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.workspaceCompilationOverridesInput"></a>

```go
func WorkspaceCompilationOverridesInput() GoogleDataformRepositoryWorkspaceCompilationOverrides
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataformRepositoryConfig <a name="GoogleDataformRepositoryConfig" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

&googledataformrepository.GoogleDataformRepositoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	GitRemoteSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDataformRepository.GoogleDataformRepositoryTimeouts,
	WorkspaceCompilationOverrides: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.name">Name</a></code> | <code>*string</code> | The repository's name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.gitRemoteSettings">GitRemoteSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a></code> | git_remote_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#id GoogleDataformRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#project GoogleDataformRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts">GoogleDataformRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.workspaceCompilationOverrides">WorkspaceCompilationOverrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a></code> | workspace_compilation_overrides block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The repository's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#name GoogleDataformRepository#name}

---

##### `GitRemoteSettings`<sup>Optional</sup> <a name="GitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.gitRemoteSettings"></a>

```go
GitRemoteSettings GoogleDataformRepositoryGitRemoteSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a>

git_remote_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#git_remote_settings GoogleDataformRepository#git_remote_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#id GoogleDataformRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#project GoogleDataformRepository#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#region GoogleDataformRepository#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.timeouts"></a>

```go
Timeouts GoogleDataformRepositoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts">GoogleDataformRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#timeouts GoogleDataformRepository#timeouts}

---

##### `WorkspaceCompilationOverrides`<sup>Optional</sup> <a name="WorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.workspaceCompilationOverrides"></a>

```go
WorkspaceCompilationOverrides GoogleDataformRepositoryWorkspaceCompilationOverrides
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a>

workspace_compilation_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#workspace_compilation_overrides GoogleDataformRepository#workspace_compilation_overrides}

---

### GoogleDataformRepositoryGitRemoteSettings <a name="GoogleDataformRepositoryGitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

&googledataformrepository.GoogleDataformRepositoryGitRemoteSettings {
	AuthenticationTokenSecretVersion: *string,
	DefaultBranch: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.authenticationTokenSecretVersion">AuthenticationTokenSecretVersion</a></code> | <code>*string</code> | The name of the Secret Manager secret version to use as an authentication token for Git operations. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | The Git remote's default branch name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.url">Url</a></code> | <code>*string</code> | The Git remote's URL. |

---

##### `AuthenticationTokenSecretVersion`<sup>Required</sup> <a name="AuthenticationTokenSecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.authenticationTokenSecretVersion"></a>

```go
AuthenticationTokenSecretVersion *string
```

- *Type:* *string

The name of the Secret Manager secret version to use as an authentication token for Git operations.

Must be in the format projects/*/secrets/*/versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#authentication_token_secret_version GoogleDataformRepository#authentication_token_secret_version}

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.defaultBranch"></a>

```go
DefaultBranch *string
```

- *Type:* *string

The Git remote's default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#default_branch GoogleDataformRepository#default_branch}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.url"></a>

```go
Url *string
```

- *Type:* *string

The Git remote's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#url GoogleDataformRepository#url}

---

### GoogleDataformRepositoryTimeouts <a name="GoogleDataformRepositoryTimeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

&googledataformrepository.GoogleDataformRepositoryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#create GoogleDataformRepository#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#delete GoogleDataformRepository#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#update GoogleDataformRepository#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#create GoogleDataformRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#delete GoogleDataformRepository#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#update GoogleDataformRepository#update}.

---

### GoogleDataformRepositoryWorkspaceCompilationOverrides <a name="GoogleDataformRepositoryWorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

&googledataformrepository.GoogleDataformRepositoryWorkspaceCompilationOverrides {
	DefaultDatabase: *string,
	SchemaSuffix: *string,
	TablePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.defaultDatabase">DefaultDatabase</a></code> | <code>*string</code> | Optional. The default database (Google Cloud project ID). |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.schemaSuffix">SchemaSuffix</a></code> | <code>*string</code> | Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | Optional. The prefix that should be prepended to all table names. |

---

##### `DefaultDatabase`<sup>Optional</sup> <a name="DefaultDatabase" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.defaultDatabase"></a>

```go
DefaultDatabase *string
```

- *Type:* *string

Optional. The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#default_database GoogleDataformRepository#default_database}

---

##### `SchemaSuffix`<sup>Optional</sup> <a name="SchemaSuffix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.schemaSuffix"></a>

```go
SchemaSuffix *string
```

- *Type:* *string

Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#schema_suffix GoogleDataformRepository#schema_suffix}

---

##### `TablePrefix`<sup>Optional</sup> <a name="TablePrefix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.tablePrefix"></a>

```go
TablePrefix *string
```

- *Type:* *string

Optional. The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_dataform_repository#table_prefix GoogleDataformRepository#table_prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataformRepositoryGitRemoteSettingsOutputReference <a name="GoogleDataformRepositoryGitRemoteSettingsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

googledataformrepository.NewGoogleDataformRepositoryGitRemoteSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataformRepositoryGitRemoteSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.tokenStatus">TokenStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersionInput">AuthenticationTokenSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersion">AuthenticationTokenSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TokenStatus`<sup>Required</sup> <a name="TokenStatus" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.tokenStatus"></a>

```go
func TokenStatus() *string
```

- *Type:* *string

---

##### `AuthenticationTokenSecretVersionInput`<sup>Optional</sup> <a name="AuthenticationTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersionInput"></a>

```go
func AuthenticationTokenSecretVersionInput() *string
```

- *Type:* *string

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranchInput"></a>

```go
func DefaultBranchInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AuthenticationTokenSecretVersion`<sup>Required</sup> <a name="AuthenticationTokenSecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersion"></a>

```go
func AuthenticationTokenSecretVersion() *string
```

- *Type:* *string

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataformRepositoryGitRemoteSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a>

---


### GoogleDataformRepositoryTimeoutsOutputReference <a name="GoogleDataformRepositoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

googledataformrepository.NewGoogleDataformRepositoryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataformRepositoryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference <a name="GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledataformrepository"

googledataformrepository.NewGoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetDefaultDatabase">ResetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetSchemaSuffix">ResetSchemaSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetTablePrefix">ResetTablePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultDatabase` <a name="ResetDefaultDatabase" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetDefaultDatabase"></a>

```go
func ResetDefaultDatabase()
```

##### `ResetSchemaSuffix` <a name="ResetSchemaSuffix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetSchemaSuffix"></a>

```go
func ResetSchemaSuffix()
```

##### `ResetTablePrefix` <a name="ResetTablePrefix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetTablePrefix"></a>

```go
func ResetTablePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabaseInput">DefaultDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffixInput">SchemaSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefixInput">TablePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabase">DefaultDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffix">SchemaSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultDatabaseInput`<sup>Optional</sup> <a name="DefaultDatabaseInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabaseInput"></a>

```go
func DefaultDatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaSuffixInput`<sup>Optional</sup> <a name="SchemaSuffixInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffixInput"></a>

```go
func SchemaSuffixInput() *string
```

- *Type:* *string

---

##### `TablePrefixInput`<sup>Optional</sup> <a name="TablePrefixInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefixInput"></a>

```go
func TablePrefixInput() *string
```

- *Type:* *string

---

##### `DefaultDatabase`<sup>Required</sup> <a name="DefaultDatabase" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabase"></a>

```go
func DefaultDatabase() *string
```

- *Type:* *string

---

##### `SchemaSuffix`<sup>Required</sup> <a name="SchemaSuffix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffix"></a>

```go
func SchemaSuffix() *string
```

- *Type:* *string

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefix"></a>

```go
func TablePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataformRepositoryWorkspaceCompilationOverrides
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a>

---



