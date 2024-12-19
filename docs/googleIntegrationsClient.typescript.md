# `googleIntegrationsClient` Submodule <a name="`googleIntegrationsClient` Submodule" id="@cdktf/provider-google-beta.googleIntegrationsClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationsClient <a name="GoogleIntegrationsClient" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client google_integrations_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

new googleIntegrationsClient.GoogleIntegrationsClient(scope: Construct, id: string, config: GoogleIntegrationsClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig">GoogleIntegrationsClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig">GoogleIntegrationsClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig">putCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCloudKmsConfig">resetCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCreateSampleIntegrations">resetCreateSampleIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetRunAsServiceAccount">resetRunAsServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudKmsConfig` <a name="putCloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig"></a>

```typescript
public putCloudKmsConfig(value: GoogleIntegrationsClientCloudKmsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putCloudKmsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIntegrationsClientTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>

---

##### `resetCloudKmsConfig` <a name="resetCloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCloudKmsConfig"></a>

```typescript
public resetCloudKmsConfig(): void
```

##### `resetCreateSampleIntegrations` <a name="resetCreateSampleIntegrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetCreateSampleIntegrations"></a>

```typescript
public resetCreateSampleIntegrations(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRunAsServiceAccount` <a name="resetRunAsServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetRunAsServiceAccount"></a>

```typescript
public resetRunAsServiceAccount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIntegrationsClient resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isConstruct"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

googleIntegrationsClient.GoogleIntegrationsClient.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIntegrationsClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIntegrationsClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIntegrationsClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationsClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfig">cloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference">GoogleIntegrationsClientCloudKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference">GoogleIntegrationsClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfigInput">cloudKmsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrationsInput">createSampleIntegrationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccountInput">runAsServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrations">createSampleIntegrations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccount">runAsServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudKmsConfig`<sup>Required</sup> <a name="cloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfig"></a>

```typescript
public readonly cloudKmsConfig: GoogleIntegrationsClientCloudKmsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference">GoogleIntegrationsClientCloudKmsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIntegrationsClientTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference">GoogleIntegrationsClientTimeoutsOutputReference</a>

---

##### `cloudKmsConfigInput`<sup>Optional</sup> <a name="cloudKmsConfigInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.cloudKmsConfigInput"></a>

```typescript
public readonly cloudKmsConfigInput: GoogleIntegrationsClientCloudKmsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

---

##### `createSampleIntegrationsInput`<sup>Optional</sup> <a name="createSampleIntegrationsInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrationsInput"></a>

```typescript
public readonly createSampleIntegrationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `runAsServiceAccountInput`<sup>Optional</sup> <a name="runAsServiceAccountInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccountInput"></a>

```typescript
public readonly runAsServiceAccountInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIntegrationsClientTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>

---

##### `createSampleIntegrations`<sup>Required</sup> <a name="createSampleIntegrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.createSampleIntegrations"></a>

```typescript
public readonly createSampleIntegrations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runAsServiceAccount`<sup>Required</sup> <a name="runAsServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.runAsServiceAccount"></a>

```typescript
public readonly runAsServiceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationsClientCloudKmsConfig <a name="GoogleIntegrationsClientCloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.Initializer"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

const googleIntegrationsClientCloudKmsConfig: googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.key">key</a></code> | <code>string</code> | A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsLocation">kmsLocation</a></code> | <code>string</code> | Location name of the key ring, e.g. "us-west1". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsRing">kmsRing</a></code> | <code>string</code> | A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.keyVersion">keyVersion</a></code> | <code>string</code> | Each version of a key contains key material used for encryption or signing. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsProjectId">kmsProjectId</a></code> | <code>string</code> | The Google Cloud project id of the project where the kms key stored. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key.

A key exists on exactly one key ring tied to a
specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#key GoogleIntegrationsClient#key}

---

##### `kmsLocation`<sup>Required</sup> <a name="kmsLocation" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsLocation"></a>

```typescript
public readonly kmsLocation: string;
```

- *Type:* string

Location name of the key ring, e.g. "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#kms_location GoogleIntegrationsClient#kms_location}

---

##### `kmsRing`<sup>Required</sup> <a name="kmsRing" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsRing"></a>

```typescript
public readonly kmsRing: string;
```

- *Type:* string

A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys.

A key ring's name does not need to be
unique across a Google Cloud project, but must be unique within a given location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#kms_ring GoogleIntegrationsClient#kms_ring}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.keyVersion"></a>

```typescript
public readonly keyVersion: string;
```

- *Type:* string

Each version of a key contains key material used for encryption or signing.

A key's version is represented by an integer, starting at 1. To decrypt data
or verify a signature, you must use the same key version that was used to
encrypt or sign the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#key_version GoogleIntegrationsClient#key_version}

---

##### `kmsProjectId`<sup>Optional</sup> <a name="kmsProjectId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig.property.kmsProjectId"></a>

```typescript
public readonly kmsProjectId: string;
```

- *Type:* string

The Google Cloud project id of the project where the kms key stored.

If empty,
the kms key is stored at the same project as customer's project and ecrypted
with CMEK, otherwise, the kms key is stored in the tenant project and
encrypted with GMEK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#kms_project_id GoogleIntegrationsClient#kms_project_id}

---

### GoogleIntegrationsClientConfig <a name="GoogleIntegrationsClientConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.Initializer"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

const googleIntegrationsClientConfig: googleIntegrationsClient.GoogleIntegrationsClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.location">location</a></code> | <code>string</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.cloudKmsConfig">cloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | cloud_kms_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.createSampleIntegrations">createSampleIntegrations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if sample integrations should be created along with provisioning. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#id GoogleIntegrationsClient#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#project GoogleIntegrationsClient#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.runAsServiceAccount">runAsServiceAccount</a></code> | <code>string</code> | User input run-as service account, if empty, will bring up a new default service account. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#location GoogleIntegrationsClient#location}

---

##### `cloudKmsConfig`<sup>Optional</sup> <a name="cloudKmsConfig" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.cloudKmsConfig"></a>

```typescript
public readonly cloudKmsConfig: GoogleIntegrationsClientCloudKmsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#cloud_kms_config GoogleIntegrationsClient#cloud_kms_config}

---

##### `createSampleIntegrations`<sup>Optional</sup> <a name="createSampleIntegrations" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.createSampleIntegrations"></a>

```typescript
public readonly createSampleIntegrations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if sample integrations should be created along with provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#create_sample_integrations GoogleIntegrationsClient#create_sample_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#id GoogleIntegrationsClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#project GoogleIntegrationsClient#project}.

---

##### `runAsServiceAccount`<sup>Optional</sup> <a name="runAsServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.runAsServiceAccount"></a>

```typescript
public readonly runAsServiceAccount: string;
```

- *Type:* string

User input run-as service account, if empty, will bring up a new default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#run_as_service_account GoogleIntegrationsClient#run_as_service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIntegrationsClientTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#timeouts GoogleIntegrationsClient#timeouts}

---

### GoogleIntegrationsClientTimeouts <a name="GoogleIntegrationsClientTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.Initializer"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

const googleIntegrationsClientTimeouts: googleIntegrationsClient.GoogleIntegrationsClientTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#create GoogleIntegrationsClient#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#delete GoogleIntegrationsClient#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#create GoogleIntegrationsClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_integrations_client#delete GoogleIntegrationsClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationsClientCloudKmsConfigOutputReference <a name="GoogleIntegrationsClientCloudKmsConfigOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

new googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId">resetKmsProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion"></a>

```typescript
public resetKeyVersion(): void
```

##### `resetKmsProjectId` <a name="resetKmsProjectId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId"></a>

```typescript
public resetKmsProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput">keyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput">kmsLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput">kmsProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput">kmsRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersion">keyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation">kmsLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId">kmsProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRing">kmsRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput"></a>

```typescript
public readonly keyVersionInput: string;
```

- *Type:* string

---

##### `kmsLocationInput`<sup>Optional</sup> <a name="kmsLocationInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput"></a>

```typescript
public readonly kmsLocationInput: string;
```

- *Type:* string

---

##### `kmsProjectIdInput`<sup>Optional</sup> <a name="kmsProjectIdInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput"></a>

```typescript
public readonly kmsProjectIdInput: string;
```

- *Type:* string

---

##### `kmsRingInput`<sup>Optional</sup> <a name="kmsRingInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput"></a>

```typescript
public readonly kmsRingInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.keyVersion"></a>

```typescript
public readonly keyVersion: string;
```

- *Type:* string

---

##### `kmsLocation`<sup>Required</sup> <a name="kmsLocation" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation"></a>

```typescript
public readonly kmsLocation: string;
```

- *Type:* string

---

##### `kmsProjectId`<sup>Required</sup> <a name="kmsProjectId" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId"></a>

```typescript
public readonly kmsProjectId: string;
```

- *Type:* string

---

##### `kmsRing`<sup>Required</sup> <a name="kmsRing" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.kmsRing"></a>

```typescript
public readonly kmsRing: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIntegrationsClientCloudKmsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientCloudKmsConfig">GoogleIntegrationsClientCloudKmsConfig</a>

---


### GoogleIntegrationsClientTimeoutsOutputReference <a name="GoogleIntegrationsClientTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIntegrationsClient } from '@cdktf/provider-google-beta'

new googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIntegrationsClientTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIntegrationsClient.GoogleIntegrationsClientTimeouts">GoogleIntegrationsClientTimeouts</a>

---



