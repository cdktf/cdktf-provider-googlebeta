# `googleRuntimeconfigVariable` Submodule <a name="`googleRuntimeconfigVariable` Submodule" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRuntimeconfigVariable <a name="GoogleRuntimeconfigVariable" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable google_runtimeconfig_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleRuntimeconfigVariable(Construct Scope, string Id, GoogleRuntimeconfigVariableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig">GoogleRuntimeconfigVariableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig">GoogleRuntimeconfigVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.resetValue"></a>

```csharp
private void ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleRuntimeconfigVariable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleRuntimeconfigVariable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleRuntimeconfigVariable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleRuntimeconfigVariable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleRuntimeconfigVariable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleRuntimeconfigVariable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleRuntimeconfigVariable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleRuntimeconfigVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRuntimeconfigVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRuntimeconfigVariableConfig <a name="GoogleRuntimeconfigVariableConfig" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleRuntimeconfigVariableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Parent,
    string Id = null,
    string Project = null,
    string Text = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.name">Name</a></code> | <code>string</code> | The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname"). |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.parent">Parent</a></code> | <code>string</code> | The name of the RuntimeConfig resource containing this variable. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#id GoogleRuntimeconfigVariable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#text GoogleRuntimeconfigVariable#text}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#value GoogleRuntimeconfigVariable#value}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#name GoogleRuntimeconfigVariable#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The name of the RuntimeConfig resource containing this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#parent GoogleRuntimeconfigVariable#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#id GoogleRuntimeconfigVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#project GoogleRuntimeconfigVariable#project}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#text GoogleRuntimeconfigVariable#text}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleRuntimeconfigVariable.GoogleRuntimeconfigVariableConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_runtimeconfig_variable#value GoogleRuntimeconfigVariable#value}.

---



