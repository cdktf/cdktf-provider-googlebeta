# `googleEventarcGoogleApiSource` Submodule <a name="`googleEventarcGoogleApiSource` Submodule" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcGoogleApiSource <a name="GoogleEventarcGoogleApiSource" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source google_eventarc_google_api_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

new googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource(scope: Construct, id: string, config: GoogleEventarcGoogleApiSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig">GoogleEventarcGoogleApiSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig">GoogleEventarcGoogleApiSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: GoogleEventarcGoogleApiSourceLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleEventarcGoogleApiSourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetCryptoKeyName"></a>

```typescript
public resetCryptoKeyName(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEventarcGoogleApiSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isConstruct"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformElement"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformResource"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleEventarcGoogleApiSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEventarcGoogleApiSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEventarcGoogleApiSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEventarcGoogleApiSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference">GoogleEventarcGoogleApiSourceLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference">GoogleEventarcGoogleApiSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.googleApiSourceIdInput">googleApiSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.googleApiSourceId">googleApiSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: GoogleEventarcGoogleApiSourceLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference">GoogleEventarcGoogleApiSourceLoggingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEventarcGoogleApiSourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference">GoogleEventarcGoogleApiSourceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cryptoKeyNameInput"></a>

```typescript
public readonly cryptoKeyNameInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `googleApiSourceIdInput`<sup>Optional</sup> <a name="googleApiSourceIdInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.googleApiSourceIdInput"></a>

```typescript
public readonly googleApiSourceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: GoogleEventarcGoogleApiSourceLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleEventarcGoogleApiSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `googleApiSourceId`<sup>Required</sup> <a name="googleApiSourceId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.googleApiSourceId"></a>

```typescript
public readonly googleApiSourceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcGoogleApiSourceConfig <a name="GoogleEventarcGoogleApiSourceConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.Initializer"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

const googleEventarcGoogleApiSourceConfig: googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.destination">destination</a></code> | <code>string</code> | Destination is the message bus that the GoogleApiSource is delivering to. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.googleApiSourceId">googleApiSourceId</a></code> | <code>string</code> | The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Resource annotations. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.displayName">displayName</a></code> | <code>string</code> | Resource display name. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#id GoogleEventarcGoogleApiSource#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#project GoogleEventarcGoogleApiSource#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Destination is the message bus that the GoogleApiSource is delivering to.

It must be point to the full resource name of a MessageBus. Format:
"projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#destination GoogleEventarcGoogleApiSource#destination}

---

##### `googleApiSourceId`<sup>Required</sup> <a name="googleApiSourceId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.googleApiSourceId"></a>

```typescript
public readonly googleApiSourceId: string;
```

- *Type:* string

The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#google_api_source_id GoogleEventarcGoogleApiSource#google_api_source_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#location GoogleEventarcGoogleApiSource#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#annotations GoogleEventarcGoogleApiSource#annotations}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#crypto_key_name GoogleEventarcGoogleApiSource#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#display_name GoogleEventarcGoogleApiSource#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#id GoogleEventarcGoogleApiSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#labels GoogleEventarcGoogleApiSource#labels}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: GoogleEventarcGoogleApiSourceLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#logging_config GoogleEventarcGoogleApiSource#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#project GoogleEventarcGoogleApiSource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEventarcGoogleApiSourceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#timeouts GoogleEventarcGoogleApiSource#timeouts}

---

### GoogleEventarcGoogleApiSourceLoggingConfig <a name="GoogleEventarcGoogleApiSourceLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig.Initializer"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

const googleEventarcGoogleApiSourceLoggingConfig: googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig.property.logSeverity">logSeverity</a></code> | <code>string</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `logSeverity`<sup>Optional</sup> <a name="logSeverity" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig.property.logSeverity"></a>

```typescript
public readonly logSeverity: string;
```

- *Type:* string

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#log_severity GoogleEventarcGoogleApiSource#log_severity}

---

### GoogleEventarcGoogleApiSourceTimeouts <a name="GoogleEventarcGoogleApiSourceTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.Initializer"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

const googleEventarcGoogleApiSourceTimeouts: googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#create GoogleEventarcGoogleApiSource#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#delete GoogleEventarcGoogleApiSource#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#update GoogleEventarcGoogleApiSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#create GoogleEventarcGoogleApiSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#delete GoogleEventarcGoogleApiSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_google_api_source#update GoogleEventarcGoogleApiSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcGoogleApiSourceLoggingConfigOutputReference <a name="GoogleEventarcGoogleApiSourceLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

new googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity">resetLogSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogSeverity` <a name="resetLogSeverity" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity"></a>

```typescript
public resetLogSeverity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput">logSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity">logSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logSeverityInput`<sup>Optional</sup> <a name="logSeverityInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput"></a>

```typescript
public readonly logSeverityInput: string;
```

- *Type:* string

---

##### `logSeverity`<sup>Required</sup> <a name="logSeverity" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity"></a>

```typescript
public readonly logSeverity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEventarcGoogleApiSourceLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a>

---


### GoogleEventarcGoogleApiSourceTimeoutsOutputReference <a name="GoogleEventarcGoogleApiSourceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleEventarcGoogleApiSource } from '@cdktf/provider-google-beta'

new googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleEventarcGoogleApiSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a>

---



