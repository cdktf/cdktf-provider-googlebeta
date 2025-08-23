# `dataGoogleStorageControlOrganizationIntelligenceConfig` Submodule <a name="`dataGoogleStorageControlOrganizationIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlOrganizationIntelligenceConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_storage_control_organization_intelligence_config google_storage_control_organization_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig(scope: Construct, id: string, config: DataGoogleStorageControlOrganizationIntelligenceConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig">DataGoogleStorageControlOrganizationIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig">DataGoogleStorageControlOrganizationIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageControlOrganizationIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageControlOrganizationIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_storage_control_organization_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlOrganizationIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig">editionConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig">effectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig">trialConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `editionConfig`<sup>Required</sup> <a name="editionConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig"></a>

```typescript
public readonly editionConfig: string;
```

- *Type:* string

---

##### `effectiveIntelligenceConfig`<sup>Required</sup> <a name="effectiveIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```typescript
public readonly effectiveIntelligenceConfig: DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.filter"></a>

```typescript
public readonly filter: DataGoogleStorageControlOrganizationIntelligenceConfigFilterList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterList</a>

---

##### `trialConfig`<sup>Required</sup> <a name="trialConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig"></a>

```typescript
public readonly trialConfig: DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlOrganizationIntelligenceConfigConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfigConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const dataGoogleStorageControlOrganizationIntelligenceConfigConfig: dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.name">name</a></code> | <code>string</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_storage_control_organization_intelligence_config#id DataGoogleStorageControlOrganizationIntelligenceConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_storage_control_organization_intelligence_config#name DataGoogleStorageControlOrganizationIntelligenceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_storage_control_organization_intelligence_config#id DataGoogleStorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const dataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig: dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig = { ... }
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilter <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilter" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const dataGoogleStorageControlOrganizationIntelligenceConfigFilter: dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter = { ... }
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const dataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets: dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets = { ... }
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const dataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations: dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations = { ... }
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const dataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets: dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets = { ... }
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const dataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations: dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations = { ... }
```


### DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const dataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig: dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effectiveEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligenceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveEdition`<sup>Required</sup> <a name="effectiveEdition" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```typescript
public readonly effectiveEdition: string;
```

- *Type:* string

---

##### `intelligenceConfig`<sup>Required</sup> <a name="intelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```typescript
public readonly intelligenceConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter">DataGoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedCloudStorageBuckets`<sup>Required</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```typescript
public readonly excludedCloudStorageBuckets: DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList</a>

---

##### `excludedCloudStorageLocations`<sup>Required</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```typescript
public readonly excludedCloudStorageLocations: DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList</a>

---

##### `includedCloudStorageBuckets`<sup>Required</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```typescript
public readonly includedCloudStorageBuckets: DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList</a>

---

##### `includedCloudStorageLocations`<sup>Required</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```typescript
public readonly includedCloudStorageLocations: DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlOrganizationIntelligenceConfigFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter">DataGoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a>

---



