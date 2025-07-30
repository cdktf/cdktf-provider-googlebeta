# `googleApihubPluginInstance` Submodule <a name="`googleApihubPluginInstance` Submodule" id="@cdktf/provider-google-beta.googleApihubPluginInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubPluginInstance <a name="GoogleApihubPluginInstance" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance google_apihub_plugin_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstance(Construct Scope, string Id, GoogleApihubPluginInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig">GoogleApihubPluginInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig">GoogleApihubPluginInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig">PutAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetAuthConfig">ResetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions"></a>

```csharp
private void PutActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions.parameter.value"></a>

- *Type:* object

---

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig"></a>

```csharp
private void PutAuthConfig(GoogleApihubPluginInstanceAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApihubPluginInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetAuthConfig` <a name="ResetAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetAuthConfig"></a>

```csharp
private void ResetAuthConfig()
```

##### `ResetDisable` <a name="ResetDisable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetDisable"></a>

```csharp
private void ResetDisable()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApihubPluginInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApihubPluginInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApihubPluginInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApihubPluginInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApihubPluginInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleApihubPluginInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApihubPluginInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApihubPluginInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubPluginInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList">GoogleApihubPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference">GoogleApihubPluginInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actionsInput">ActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfigInput">AuthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disableInput">DisableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInput">PluginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceIdInput">PluginInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disable">Disable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.plugin">Plugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceId">PluginInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actions"></a>

```csharp
public GoogleApihubPluginInstanceActionsList Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList">GoogleApihubPluginInstanceActionsList</a>

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigOutputReference AuthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeouts"></a>

```csharp
public GoogleApihubPluginInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference">GoogleApihubPluginInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actionsInput"></a>

```csharp
public object ActionsInput { get; }
```

- *Type:* object

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfigInput"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfig AuthConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disableInput"></a>

```csharp
public object DisableInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PluginInput`<sup>Optional</sup> <a name="PluginInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInput"></a>

```csharp
public string PluginInput { get; }
```

- *Type:* string

---

##### `PluginInstanceIdInput`<sup>Optional</sup> <a name="PluginInstanceIdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceIdInput"></a>

```csharp
public string PluginInstanceIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disable"></a>

```csharp
public object Disable { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.plugin"></a>

```csharp
public string Plugin { get; }
```

- *Type:* string

---

##### `PluginInstanceId`<sup>Required</sup> <a name="PluginInstanceId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceId"></a>

```csharp
public string PluginInstanceId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubPluginInstanceActions <a name="GoogleApihubPluginInstanceActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActions {
    string ActionId,
    GoogleApihubPluginInstanceActionsCurationConfig CurationConfig = null,
    string ScheduleCronExpression = null,
    string ScheduleTimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.actionId">ActionId</a></code> | <code>string</code> | This should map to one of the action id specified in actions_config in the plugin. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.curationConfig">CurationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | curation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleCronExpression">ScheduleCronExpression</a></code> | <code>string</code> | The schedule for this plugin instance action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleTimeZone">ScheduleTimeZone</a></code> | <code>string</code> | The time zone for the schedule cron expression. If not provided, UTC will be used. |

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.actionId"></a>

```csharp
public string ActionId { get; set; }
```

- *Type:* string

This should map to one of the action id specified in actions_config in the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#action_id GoogleApihubPluginInstance#action_id}

---

##### `CurationConfig`<sup>Optional</sup> <a name="CurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.curationConfig"></a>

```csharp
public GoogleApihubPluginInstanceActionsCurationConfig CurationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

curation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#curation_config GoogleApihubPluginInstance#curation_config}

---

##### `ScheduleCronExpression`<sup>Optional</sup> <a name="ScheduleCronExpression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleCronExpression"></a>

```csharp
public string ScheduleCronExpression { get; set; }
```

- *Type:* string

The schedule for this plugin instance action.

This can only be set if the
plugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#schedule_cron_expression GoogleApihubPluginInstance#schedule_cron_expression}

---

##### `ScheduleTimeZone`<sup>Optional</sup> <a name="ScheduleTimeZone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleTimeZone"></a>

```csharp
public string ScheduleTimeZone { get; set; }
```

- *Type:* string

The time zone for the schedule cron expression. If not provided, UTC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#schedule_time_zone GoogleApihubPluginInstance#schedule_time_zone}

---

### GoogleApihubPluginInstanceActionsCurationConfig <a name="GoogleApihubPluginInstanceActionsCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsCurationConfig {
    string CurationType = null,
    GoogleApihubPluginInstanceActionsCurationConfigCustomCuration CustomCuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.curationType">CurationType</a></code> | <code>string</code> | Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.customCuration">CustomCuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | custom_curation block. |

---

##### `CurationType`<sup>Optional</sup> <a name="CurationType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.curationType"></a>

```csharp
public string CurationType { get; set; }
```

- *Type:* string

Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#curation_type GoogleApihubPluginInstance#curation_type}

---

##### `CustomCuration`<sup>Optional</sup> <a name="CustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.customCuration"></a>

```csharp
public GoogleApihubPluginInstanceActionsCurationConfigCustomCuration CustomCuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

custom_curation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#custom_curation GoogleApihubPluginInstance#custom_curation}

---

### GoogleApihubPluginInstanceActionsCurationConfigCustomCuration <a name="GoogleApihubPluginInstanceActionsCurationConfigCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsCurationConfigCustomCuration {
    string Curation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation">Curation</a></code> | <code>string</code> | The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'. |

---

##### `Curation`<sup>Required</sup> <a name="Curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation"></a>

```csharp
public string Curation { get; set; }
```

- *Type:* string

The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#curation GoogleApihubPluginInstance#curation}

---

### GoogleApihubPluginInstanceActionsHubInstanceAction <a name="GoogleApihubPluginInstanceActionsHubInstanceAction" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsHubInstanceAction {

};
```


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution {

};
```


### GoogleApihubPluginInstanceAuthConfig <a name="GoogleApihubPluginInstanceAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfig {
    string AuthType,
    GoogleApihubPluginInstanceAuthConfigApiKeyConfig ApiKeyConfig = null,
    GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig GoogleServiceAccountConfig = null,
    GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig Oauth2ClientCredentialsConfig = null,
    GoogleApihubPluginInstanceAuthConfigUserPasswordConfig UserPasswordConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.authType">AuthType</a></code> | <code>string</code> | Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig">GoogleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | google_service_account_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig">Oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | oauth2_client_credentials_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.userPasswordConfig">UserPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | user_password_config block. |

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#auth_type GoogleApihubPluginInstance#auth_type}

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.apiKeyConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigApiKeyConfig ApiKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#api_key_config GoogleApihubPluginInstance#api_key_config}

---

##### `GoogleServiceAccountConfig`<sup>Optional</sup> <a name="GoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig GoogleServiceAccountConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

google_service_account_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#google_service_account_config GoogleApihubPluginInstance#google_service_account_config}

---

##### `Oauth2ClientCredentialsConfig`<sup>Optional</sup> <a name="Oauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig Oauth2ClientCredentialsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

oauth2_client_credentials_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#oauth2_client_credentials_config GoogleApihubPluginInstance#oauth2_client_credentials_config}

---

##### `UserPasswordConfig`<sup>Optional</sup> <a name="UserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.userPasswordConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfig UserPasswordConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

user_password_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#user_password_config GoogleApihubPluginInstance#user_password_config}

---

### GoogleApihubPluginInstanceAuthConfigApiKeyConfig <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigApiKeyConfig {
    GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey ApiKey,
    string HttpElementLocation,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation">HttpElementLocation</a></code> | <code>string</code> | The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.name">Name</a></code> | <code>string</code> | The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name. |

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#api_key GoogleApihubPluginInstance#api_key}

---

##### `HttpElementLocation`<sup>Required</sup> <a name="HttpElementLocation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation"></a>

```csharp
public string HttpElementLocation { get; set; }
```

- *Type:* string

The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#http_element_location GoogleApihubPluginInstance#http_element_location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#name GoogleApihubPluginInstance#name}

---

### GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig <a name="GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig {
    string ServiceAccount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account to be used for authenticating request. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#service_account GoogleApihubPluginInstance#service_account}

---

### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig {
    string ClientId,
    GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret ClientSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | client_secret block. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#client_id GoogleApihubPluginInstance#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret ClientSecret { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#client_secret GoogleApihubPluginInstance#client_secret}

---

### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceAuthConfigUserPasswordConfig <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigUserPasswordConfig {
    GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.password">Password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | password block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.username">Username</a></code> | <code>string</code> | Username. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.password"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword Password { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#password GoogleApihubPluginInstance#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#username GoogleApihubPluginInstance#username}

---

### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceConfig <a name="GoogleApihubPluginInstanceConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    string Plugin,
    string PluginInstanceId,
    object Actions = null,
    GoogleApihubPluginInstanceAuthConfig AuthConfig = null,
    object Disable = null,
    string Id = null,
    string Project = null,
    GoogleApihubPluginInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.plugin">Plugin</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.pluginInstanceId">PluginInstanceId</a></code> | <code>string</code> | The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.actions">Actions</a></code> | <code>object</code> | actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.disable">Disable</a></code> | <code>object</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#display_name GoogleApihubPluginInstance#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#location GoogleApihubPluginInstance#location}

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.plugin"></a>

```csharp
public string Plugin { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#plugin GoogleApihubPluginInstance#plugin}

---

##### `PluginInstanceId`<sup>Required</sup> <a name="PluginInstanceId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.pluginInstanceId"></a>

```csharp
public string PluginInstanceId { get; set; }
```

- *Type:* string

The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another plugin instance in the plugin
  resource.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#plugin_instance_id GoogleApihubPluginInstance#plugin_instance_id}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.actions"></a>

```csharp
public object Actions { get; set; }
```

- *Type:* object

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#actions GoogleApihubPluginInstance#actions}

---

##### `AuthConfig`<sup>Optional</sup> <a name="AuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.authConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfig AuthConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#auth_config GoogleApihubPluginInstance#auth_config}

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.disable"></a>

```csharp
public object Disable { get; set; }
```

- *Type:* object

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#disable GoogleApihubPluginInstance#disable}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.timeouts"></a>

```csharp
public GoogleApihubPluginInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#timeouts GoogleApihubPluginInstance#timeouts}

---

### GoogleApihubPluginInstanceTimeouts <a name="GoogleApihubPluginInstanceTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#create GoogleApihubPluginInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#delete GoogleApihubPluginInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#update GoogleApihubPluginInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#create GoogleApihubPluginInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#delete GoogleApihubPluginInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_apihub_plugin_instance#update GoogleApihubPluginInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference <a name="GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput">CurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation">Curation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurationInput`<sup>Optional</sup> <a name="CurationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput"></a>

```csharp
public string CurationInput { get; }
```

- *Type:* string

---

##### `Curation`<sup>Required</sup> <a name="Curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation"></a>

```csharp
public string Curation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceActionsCurationConfigCustomCuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---


### GoogleApihubPluginInstanceActionsCurationConfigOutputReference <a name="GoogleApihubPluginInstanceActionsCurationConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsCurationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration">PutCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType">ResetCurationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration">ResetCustomCuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomCuration` <a name="PutCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration"></a>

```csharp
private void PutCustomCuration(GoogleApihubPluginInstanceActionsCurationConfigCustomCuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `ResetCurationType` <a name="ResetCurationType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType"></a>

```csharp
private void ResetCurationType()
```

##### `ResetCustomCuration` <a name="ResetCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration"></a>

```csharp
private void ResetCustomCuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration">CustomCuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput">CurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput">CustomCurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType">CurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomCuration`<sup>Required</sup> <a name="CustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration"></a>

```csharp
public GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference CustomCuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a>

---

##### `CurationTypeInput`<sup>Optional</sup> <a name="CurationTypeInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput"></a>

```csharp
public string CurationTypeInput { get; }
```

- *Type:* string

---

##### `CustomCurationInput`<sup>Optional</sup> <a name="CustomCurationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput"></a>

```csharp
public GoogleApihubPluginInstanceActionsCurationConfigCustomCuration CustomCurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `CurationType`<sup>Required</sup> <a name="CurationType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType"></a>

```csharp
public string CurationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceActionsCurationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get"></a>

```csharp
private GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution</a>

---


### GoogleApihubPluginInstanceActionsHubInstanceActionList <a name="GoogleApihubPluginInstanceActionsHubInstanceActionList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsHubInstanceActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get"></a>

```csharp
private GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference <a name="GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState">CurrentExecutionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution">LastExecution</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction">GoogleApihubPluginInstanceActionsHubInstanceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentExecutionState`<sup>Required</sup> <a name="CurrentExecutionState" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState"></a>

```csharp
public string CurrentExecutionState { get; }
```

- *Type:* string

---

##### `LastExecution`<sup>Required</sup> <a name="LastExecution" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution"></a>

```csharp
public GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList LastExecution { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceActionsHubInstanceAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction">GoogleApihubPluginInstanceActionsHubInstanceAction</a>

---


### GoogleApihubPluginInstanceActionsList <a name="GoogleApihubPluginInstanceActionsList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get"></a>

```csharp
private GoogleApihubPluginInstanceActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApihubPluginInstanceActionsOutputReference <a name="GoogleApihubPluginInstanceActionsOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig">PutCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetCurationConfig">ResetCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression">ResetScheduleCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone">ResetScheduleTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCurationConfig` <a name="PutCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig"></a>

```csharp
private void PutCurationConfig(GoogleApihubPluginInstanceActionsCurationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---

##### `ResetCurationConfig` <a name="ResetCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetCurationConfig"></a>

```csharp
private void ResetCurationConfig()
```

##### `ResetScheduleCronExpression` <a name="ResetScheduleCronExpression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression"></a>

```csharp
private void ResetScheduleCronExpression()
```

##### `ResetScheduleTimeZone` <a name="ResetScheduleTimeZone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone"></a>

```csharp
private void ResetScheduleTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfig">CurationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference">GoogleApihubPluginInstanceActionsCurationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.hubInstanceAction">HubInstanceAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList">GoogleApihubPluginInstanceActionsHubInstanceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionIdInput">ActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfigInput">CurationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput">ScheduleCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput">ScheduleTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression">ScheduleCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone">ScheduleTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurationConfig`<sup>Required</sup> <a name="CurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfig"></a>

```csharp
public GoogleApihubPluginInstanceActionsCurationConfigOutputReference CurationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference">GoogleApihubPluginInstanceActionsCurationConfigOutputReference</a>

---

##### `HubInstanceAction`<sup>Required</sup> <a name="HubInstanceAction" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.hubInstanceAction"></a>

```csharp
public GoogleApihubPluginInstanceActionsHubInstanceActionList HubInstanceAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList">GoogleApihubPluginInstanceActionsHubInstanceActionList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ActionIdInput`<sup>Optional</sup> <a name="ActionIdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionIdInput"></a>

```csharp
public string ActionIdInput { get; }
```

- *Type:* string

---

##### `CurationConfigInput`<sup>Optional</sup> <a name="CurationConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfigInput"></a>

```csharp
public GoogleApihubPluginInstanceActionsCurationConfig CurationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---

##### `ScheduleCronExpressionInput`<sup>Optional</sup> <a name="ScheduleCronExpressionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput"></a>

```csharp
public string ScheduleCronExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleTimeZoneInput`<sup>Optional</sup> <a name="ScheduleTimeZoneInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput"></a>

```csharp
public string ScheduleTimeZoneInput { get; }
```

- *Type:* string

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `ScheduleCronExpression`<sup>Required</sup> <a name="ScheduleCronExpression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression"></a>

```csharp
public string ScheduleCronExpression { get; }
```

- *Type:* string

---

##### `ScheduleTimeZone`<sup>Required</sup> <a name="ScheduleTimeZone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone"></a>

```csharp
public string ScheduleTimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


### GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput">HttpElementLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation">HttpElementLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey ApiKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---

##### `HttpElementLocationInput`<sup>Optional</sup> <a name="HttpElementLocationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput"></a>

```csharp
public string HttpElementLocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `HttpElementLocation`<sup>Required</sup> <a name="HttpElementLocation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation"></a>

```csharp
public string HttpElementLocation { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret"></a>

```csharp
private void PutClientSecret(GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference ClientSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret ClientSecretInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig">PutGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig">PutOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig">PutUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig">ResetGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig">ResetOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig">ResetUserPasswordConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig"></a>

```csharp
private void PutApiKeyConfig(GoogleApihubPluginInstanceAuthConfigApiKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `PutGoogleServiceAccountConfig` <a name="PutGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig"></a>

```csharp
private void PutGoogleServiceAccountConfig(GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `PutOauth2ClientCredentialsConfig` <a name="PutOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig"></a>

```csharp
private void PutOauth2ClientCredentialsConfig(GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `PutUserPasswordConfig` <a name="PutUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig"></a>

```csharp
private void PutUserPasswordConfig(GoogleApihubPluginInstanceAuthConfigUserPasswordConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig"></a>

```csharp
private void ResetApiKeyConfig()
```

##### `ResetGoogleServiceAccountConfig` <a name="ResetGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig"></a>

```csharp
private void ResetGoogleServiceAccountConfig()
```

##### `ResetOauth2ClientCredentialsConfig` <a name="ResetOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig"></a>

```csharp
private void ResetOauth2ClientCredentialsConfig()
```

##### `ResetUserPasswordConfig` <a name="ResetUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig"></a>

```csharp
private void ResetUserPasswordConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig">GoogleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig">Oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig">UserPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput">GoogleServiceAccountConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput">Oauth2ClientCredentialsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput">UserPasswordConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a>

---

##### `GoogleServiceAccountConfig`<sup>Required</sup> <a name="GoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference GoogleServiceAccountConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a>

---

##### `Oauth2ClientCredentialsConfig`<sup>Required</sup> <a name="Oauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference Oauth2ClientCredentialsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a>

---

##### `UserPasswordConfig`<sup>Required</sup> <a name="UserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference UserPasswordConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigApiKeyConfig ApiKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `GoogleServiceAccountConfigInput`<sup>Optional</sup> <a name="GoogleServiceAccountConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig GoogleServiceAccountConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `Oauth2ClientCredentialsConfigInput`<sup>Optional</sup> <a name="Oauth2ClientCredentialsConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig Oauth2ClientCredentialsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `UserPasswordConfigInput`<sup>Optional</sup> <a name="UserPasswordConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfig UserPasswordConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword">PutPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPassword` <a name="PutPassword" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword"></a>

```csharp
private void PutPassword(GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password">Password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference Password { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword PasswordInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue"></a>

```csharp
public GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


### GoogleApihubPluginInstanceTimeoutsOutputReference <a name="GoogleApihubPluginInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApihubPluginInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



