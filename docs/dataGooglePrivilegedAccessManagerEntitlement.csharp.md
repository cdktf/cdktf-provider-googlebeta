# `dataGooglePrivilegedAccessManagerEntitlement` Submodule <a name="`dataGooglePrivilegedAccessManagerEntitlement` Submodule" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePrivilegedAccessManagerEntitlement <a name="DataGooglePrivilegedAccessManagerEntitlement" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_privileged_access_manager_entitlement google_privileged_access_manager_entitlement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlement(Construct Scope, string Id, DataGooglePrivilegedAccessManagerEntitlementConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig">DataGooglePrivilegedAccessManagerEntitlementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig">DataGooglePrivilegedAccessManagerEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetEntitlementId">ResetEntitlementId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetParent">ResetParent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEntitlementId` <a name="ResetEntitlementId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetEntitlementId"></a>

```csharp
private void ResetEntitlementId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetParent"></a>

```csharp
private void ResetParent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGooglePrivilegedAccessManagerEntitlement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGooglePrivilegedAccessManagerEntitlement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGooglePrivilegedAccessManagerEntitlement.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGooglePrivilegedAccessManagerEntitlement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGooglePrivilegedAccessManagerEntitlement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGooglePrivilegedAccessManagerEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGooglePrivilegedAccessManagerEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets">AdditionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.eligibleUsers">EligibleUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList">DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration">MaxRequestDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.privilegedAccess">PrivilegedAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig">RequesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput">EntitlementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdditionalNotificationTargets`<sup>Required</sup> <a name="AdditionalNotificationTargets" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList AdditionalNotificationTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList</a>

---

##### `ApprovalWorkflow`<sup>Required</sup> <a name="ApprovalWorkflow" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList ApprovalWorkflow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EligibleUsers`<sup>Required</sup> <a name="EligibleUsers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.eligibleUsers"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList EligibleUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList">DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `MaxRequestDuration`<sup>Required</sup> <a name="MaxRequestDuration" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration"></a>

```csharp
public string MaxRequestDuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivilegedAccess`<sup>Required</sup> <a name="PrivilegedAccess" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.privilegedAccess"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList PrivilegedAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList</a>

---

##### `RequesterJustificationConfig`<sup>Required</sup> <a name="RequesterJustificationConfig" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList RequesterJustificationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `EntitlementIdInput`<sup>Optional</sup> <a name="EntitlementIdInput" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput"></a>

```csharp
public string EntitlementIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets <a name="DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets {

};
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow {

};
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals {

};
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps {

};
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers {

};
```


### DataGooglePrivilegedAccessManagerEntitlementConfig <a name="DataGooglePrivilegedAccessManagerEntitlementConfig" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EntitlementId = null,
    string Id = null,
    string Location = null,
    string Parent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId">EntitlementId</a></code> | <code>string</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_privileged_access_manager_entitlement#id DataGooglePrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.location">Location</a></code> | <code>string</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.parent">Parent</a></code> | <code>string</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EntitlementId`<sup>Optional</sup> <a name="EntitlementId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId"></a>

```csharp
public string EntitlementId { get; set; }
```

- *Type:* string

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_privileged_access_manager_entitlement#entitlement_id DataGooglePrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_privileged_access_manager_entitlement#id DataGooglePrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_privileged_access_manager_entitlement#location DataGooglePrivilegedAccessManagerEntitlement#location}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_privileged_access_manager_entitlement#parent DataGooglePrivilegedAccessManagerEntitlement#parent}

---

### DataGooglePrivilegedAccessManagerEntitlementEligibleUsers <a name="DataGooglePrivilegedAccessManagerEntitlementEligibleUsers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementEligibleUsers {

};
```


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess {

};
```


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess {

};
```


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings {

};
```


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig {

};
```


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory {

};
```


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList <a name="DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients">AdminEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients">RequesterEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminEmailRecipients`<sup>Required</sup> <a name="AdminEmailRecipients" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients"></a>

```csharp
public string[] AdminEmailRecipients { get; }
```

- *Type:* string[]

---

##### `RequesterEmailRecipients`<sup>Required</sup> <a name="RequesterEmailRecipients" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients"></a>

```csharp
public string[] RequesterEmailRecipients { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification">RequireApproverJustification</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequireApproverJustification`<sup>Required</sup> <a name="RequireApproverJustification" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification"></a>

```csharp
public IResolvable RequireApproverJustification { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients">ApproverEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers">Approvers</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalsNeeded`<sup>Required</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded"></a>

```csharp
public double ApprovalsNeeded { get; }
```

- *Type:* double

---

##### `ApproverEmailRecipients`<sup>Required</sup> <a name="ApproverEmailRecipients" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients"></a>

```csharp
public string[] ApproverEmailRecipients { get; }
```

- *Type:* string[]

---

##### `Approvers`<sup>Required</sup> <a name="Approvers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList Approvers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals">ManualApprovals</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManualApprovals`<sup>Required</sup> <a name="ManualApprovals" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList ManualApprovals { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---


### DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList <a name="DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers">DataGooglePrivilegedAccessManagerEntitlementEligibleUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementEligibleUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers">DataGooglePrivilegedAccessManagerEntitlementEligibleUsers</a>

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings">RoleBindings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `RoleBindings`<sup>Required</sup> <a name="RoleBindings" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList RoleBindings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression"></a>

```csharp
public string ConditionExpression { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess">GcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpIamAccess`<sup>Required</sup> <a name="GcpIamAccess" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList GcpIamAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory">NotMandatory</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured">Unstructured</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotMandatory`<sup>Required</sup> <a name="NotMandatory" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList NotMandatory { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList</a>

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList Unstructured { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.get"></a>

```csharp
private DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue"></a>

```csharp
public DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---



