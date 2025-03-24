# `dataGoogleFirebaseWebAppConfig` Submodule <a name="`dataGoogleFirebaseWebAppConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirebaseWebAppConfigA <a name="DataGoogleFirebaseWebAppConfigA" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_firebase_web_app_config google_firebase_web_app_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer"></a>

```typescript
import { dataGoogleFirebaseWebAppConfig } from '@cdktf/provider-google-beta'

new dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA(scope: Construct, id: string, config: DataGoogleFirebaseWebAppConfigAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig">DataGoogleFirebaseWebAppConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig">DataGoogleFirebaseWebAppConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFirebaseWebAppConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isConstruct"></a>

```typescript
import { dataGoogleFirebaseWebAppConfig } from '@cdktf/provider-google-beta'

dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformElement"></a>

```typescript
import { dataGoogleFirebaseWebAppConfig } from '@cdktf/provider-google-beta'

dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformDataSource"></a>

```typescript
import { dataGoogleFirebaseWebAppConfig } from '@cdktf/provider-google-beta'

dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport"></a>

```typescript
import { dataGoogleFirebaseWebAppConfig } from '@cdktf/provider-google-beta'

dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleFirebaseWebAppConfigA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleFirebaseWebAppConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleFirebaseWebAppConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_firebase_web_app_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFirebaseWebAppConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.authDomain">authDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.databaseUrl">databaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.locationId">locationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.measurementId">measurementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.messagingSenderId">messagingSenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.storageBucket">storageBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.webAppIdInput">webAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.webAppId">webAppId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.authDomain"></a>

```typescript
public readonly authDomain: string;
```

- *Type:* string

---

##### `databaseUrl`<sup>Required</sup> <a name="databaseUrl" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.databaseUrl"></a>

```typescript
public readonly databaseUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

---

##### `measurementId`<sup>Required</sup> <a name="measurementId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.measurementId"></a>

```typescript
public readonly measurementId: string;
```

- *Type:* string

---

##### `messagingSenderId`<sup>Required</sup> <a name="messagingSenderId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.messagingSenderId"></a>

```typescript
public readonly messagingSenderId: string;
```

- *Type:* string

---

##### `storageBucket`<sup>Required</sup> <a name="storageBucket" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.storageBucket"></a>

```typescript
public readonly storageBucket: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `webAppIdInput`<sup>Optional</sup> <a name="webAppIdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.webAppIdInput"></a>

```typescript
public readonly webAppIdInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.webAppId"></a>

```typescript
public readonly webAppId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirebaseWebAppConfigAConfig <a name="DataGoogleFirebaseWebAppConfigAConfig" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.Initializer"></a>

```typescript
import { dataGoogleFirebaseWebAppConfig } from '@cdktf/provider-google-beta'

const dataGoogleFirebaseWebAppConfigAConfig: dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.webAppId">webAppId</a></code> | <code>string</code> | The id of the Firebase web App. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.project">project</a></code> | <code>string</code> | The project id of the Firebase web App. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.webAppId"></a>

```typescript
public readonly webAppId: string;
```

- *Type:* string

The id of the Firebase web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_firebase_web_app_config#web_app_id DataGoogleFirebaseWebAppConfigA#web_app_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project id of the Firebase web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_firebase_web_app_config#project DataGoogleFirebaseWebAppConfigA#project}

---



