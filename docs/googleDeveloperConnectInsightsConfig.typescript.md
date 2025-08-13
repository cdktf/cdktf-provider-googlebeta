# `googleDeveloperConnectInsightsConfig` Submodule <a name="`googleDeveloperConnectInsightsConfig` Submodule" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectInsightsConfig <a name="GoogleDeveloperConnectInsightsConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config google_developer_connect_insights_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig(scope: Construct, id: string, config: GoogleDeveloperConnectInsightsConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig">GoogleDeveloperConnectInsightsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig">GoogleDeveloperConnectInsightsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putArtifactConfigs">putArtifactConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetArtifactConfigs">resetArtifactConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArtifactConfigs` <a name="putArtifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putArtifactConfigs"></a>

```typescript
public putArtifactConfigs(value: IResolvable | GoogleDeveloperConnectInsightsConfigArtifactConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putArtifactConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDeveloperConnectInsightsConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetArtifactConfigs` <a name="resetArtifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetArtifactConfigs"></a>

```typescript
public resetArtifactConfigs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDeveloperConnectInsightsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDeveloperConnectInsightsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDeveloperConnectInsightsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDeveloperConnectInsightsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectInsightsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigs">artifactConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList">GoogleDeveloperConnectInsightsConfigArtifactConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList">GoogleDeveloperConnectInsightsConfigErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.runtimeConfigs">runtimeConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference">GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplicationInput">appHubApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigsInput">artifactConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigIdInput">insightsConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplication">appHubApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigId">insightsConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactConfigs`<sup>Required</sup> <a name="artifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigs"></a>

```typescript
public readonly artifactConfigs: GoogleDeveloperConnectInsightsConfigArtifactConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList">GoogleDeveloperConnectInsightsConfigArtifactConfigsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.errors"></a>

```typescript
public readonly errors: GoogleDeveloperConnectInsightsConfigErrorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList">GoogleDeveloperConnectInsightsConfigErrorsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `runtimeConfigs`<sup>Required</sup> <a name="runtimeConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.runtimeConfigs"></a>

```typescript
public readonly runtimeConfigs: GoogleDeveloperConnectInsightsConfigRuntimeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference">GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `appHubApplicationInput`<sup>Optional</sup> <a name="appHubApplicationInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplicationInput"></a>

```typescript
public readonly appHubApplicationInput: string;
```

- *Type:* string

---

##### `artifactConfigsInput`<sup>Optional</sup> <a name="artifactConfigsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigsInput"></a>

```typescript
public readonly artifactConfigsInput: IResolvable | GoogleDeveloperConnectInsightsConfigArtifactConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insightsConfigIdInput`<sup>Optional</sup> <a name="insightsConfigIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigIdInput"></a>

```typescript
public readonly insightsConfigIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDeveloperConnectInsightsConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `appHubApplication`<sup>Required</sup> <a name="appHubApplication" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplication"></a>

```typescript
public readonly appHubApplication: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insightsConfigId`<sup>Required</sup> <a name="insightsConfigId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigId"></a>

```typescript
public readonly insightsConfigId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectInsightsConfigArtifactConfigs <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigArtifactConfigs: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactAnalysis">googleArtifactAnalysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | google_artifact_analysis block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactRegistry">googleArtifactRegistry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | google_artifact_registry block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.uri">uri</a></code> | <code>string</code> | The URI of the artifact that is deployed. |

---

##### `googleArtifactAnalysis`<sup>Optional</sup> <a name="googleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactAnalysis"></a>

```typescript
public readonly googleArtifactAnalysis: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

google_artifact_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#google_artifact_analysis GoogleDeveloperConnectInsightsConfig#google_artifact_analysis}

---

##### `googleArtifactRegistry`<sup>Optional</sup> <a name="googleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactRegistry"></a>

```typescript
public readonly googleArtifactRegistry: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

google_artifact_registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#google_artifact_registry GoogleDeveloperConnectInsightsConfig#google_artifact_registry}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI of the artifact that is deployed.

e.g. 'us-docker.pkg.dev/my-project/my-repo/image'.
The URI does not include the tag / digest because it captures a lineage of
artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#uri GoogleDeveloperConnectInsightsConfig#uri}

---

### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.property.projectId">projectId</a></code> | <code>string</code> | The project id of the project where the provenance is stored. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project id of the project where the provenance is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#project_id GoogleDeveloperConnectInsightsConfig#project_id}

---

### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.artifactRegistryPackage">artifactRegistryPackage</a></code> | <code>string</code> | The name of the artifact registry package. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.projectId">projectId</a></code> | <code>string</code> | The host project of Artifact Registry. |

---

##### `artifactRegistryPackage`<sup>Required</sup> <a name="artifactRegistryPackage" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.artifactRegistryPackage"></a>

```typescript
public readonly artifactRegistryPackage: string;
```

- *Type:* string

The name of the artifact registry package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#artifact_registry_package GoogleDeveloperConnectInsightsConfig#artifact_registry_package}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The host project of Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#project_id GoogleDeveloperConnectInsightsConfig#project_id}

---

### GoogleDeveloperConnectInsightsConfigConfig <a name="GoogleDeveloperConnectInsightsConfigConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigConfig: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.appHubApplication">appHubApplication</a></code> | <code>string</code> | The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.insightsConfigId">insightsConfigId</a></code> | <code>string</code> | ID of the requesting InsightsConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.artifactConfigs">artifactConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]</code> | artifact_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#id GoogleDeveloperConnectInsightsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of labels associated with an InsightsConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#project GoogleDeveloperConnectInsightsConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appHubApplication`<sup>Required</sup> <a name="appHubApplication" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.appHubApplication"></a>

```typescript
public readonly appHubApplication: string;
```

- *Type:* string

The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#app_hub_application GoogleDeveloperConnectInsightsConfig#app_hub_application}

---

##### `insightsConfigId`<sup>Required</sup> <a name="insightsConfigId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.insightsConfigId"></a>

```typescript
public readonly insightsConfigId: string;
```

- *Type:* string

ID of the requesting InsightsConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#insights_config_id GoogleDeveloperConnectInsightsConfig#insights_config_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#location GoogleDeveloperConnectInsightsConfig#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#annotations GoogleDeveloperConnectInsightsConfig#annotations}

---

##### `artifactConfigs`<sup>Optional</sup> <a name="artifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.artifactConfigs"></a>

```typescript
public readonly artifactConfigs: IResolvable | GoogleDeveloperConnectInsightsConfigArtifactConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]

artifact_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#artifact_configs GoogleDeveloperConnectInsightsConfig#artifact_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#id GoogleDeveloperConnectInsightsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of labels associated with an InsightsConfig.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#labels GoogleDeveloperConnectInsightsConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#project GoogleDeveloperConnectInsightsConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDeveloperConnectInsightsConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#timeouts GoogleDeveloperConnectInsightsConfig#timeouts}

---

### GoogleDeveloperConnectInsightsConfigErrors <a name="GoogleDeveloperConnectInsightsConfigErrors" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigErrors: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors = { ... }
```


### GoogleDeveloperConnectInsightsConfigErrorsDetails <a name="GoogleDeveloperConnectInsightsConfigErrorsDetails" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigErrorsDetails: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails = { ... }
```


### GoogleDeveloperConnectInsightsConfigRuntimeConfigs <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigRuntimeConfigs: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs = { ... }
```


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload = { ... }
```


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload = { ... }
```


### GoogleDeveloperConnectInsightsConfigTimeouts <a name="GoogleDeveloperConnectInsightsConfigTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

const googleDeveloperConnectInsightsConfigTimeouts: googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#create GoogleDeveloperConnectInsightsConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#delete GoogleDeveloperConnectInsightsConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#update GoogleDeveloperConnectInsightsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#create GoogleDeveloperConnectInsightsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#delete GoogleDeveloperConnectInsightsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_developer_connect_insights_config#update GoogleDeveloperConnectInsightsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---


### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackageInput">artifactRegistryPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackage">artifactRegistryPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactRegistryPackageInput`<sup>Optional</sup> <a name="artifactRegistryPackageInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackageInput"></a>

```typescript
public readonly artifactRegistryPackageInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `artifactRegistryPackage`<sup>Required</sup> <a name="artifactRegistryPackage" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackage"></a>

```typescript
public readonly artifactRegistryPackage: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---


### GoogleDeveloperConnectInsightsConfigArtifactConfigsList <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.get"></a>

```typescript
public get(index: number): GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDeveloperConnectInsightsConfigArtifactConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]

---


### GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis">putGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry">putGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactAnalysis">resetGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactRegistry">resetGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoogleArtifactAnalysis` <a name="putGoogleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis"></a>

```typescript
public putGoogleArtifactAnalysis(value: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---

##### `putGoogleArtifactRegistry` <a name="putGoogleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry"></a>

```typescript
public putGoogleArtifactRegistry(value: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---

##### `resetGoogleArtifactAnalysis` <a name="resetGoogleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactAnalysis"></a>

```typescript
public resetGoogleArtifactAnalysis(): void
```

##### `resetGoogleArtifactRegistry` <a name="resetGoogleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactRegistry"></a>

```typescript
public resetGoogleArtifactRegistry(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysis">googleArtifactAnalysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistry">googleArtifactRegistry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysisInput">googleArtifactAnalysisInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistryInput">googleArtifactRegistryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `googleArtifactAnalysis`<sup>Required</sup> <a name="googleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysis"></a>

```typescript
public readonly googleArtifactAnalysis: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference</a>

---

##### `googleArtifactRegistry`<sup>Required</sup> <a name="googleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistry"></a>

```typescript
public readonly googleArtifactRegistry: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference</a>

---

##### `googleArtifactAnalysisInput`<sup>Optional</sup> <a name="googleArtifactAnalysisInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysisInput"></a>

```typescript
public readonly googleArtifactAnalysisInput: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---

##### `googleArtifactRegistryInput`<sup>Optional</sup> <a name="googleArtifactRegistryInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistryInput"></a>

```typescript
public readonly googleArtifactRegistryInput: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDeveloperConnectInsightsConfigArtifactConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>

---


### GoogleDeveloperConnectInsightsConfigErrorsDetailsList <a name="GoogleDeveloperConnectInsightsConfigErrorsDetailsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.get"></a>

```typescript
public get(index: number): GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference <a name="GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.detailMessage">detailMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails">GoogleDeveloperConnectInsightsConfigErrorsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detailMessage`<sup>Required</sup> <a name="detailMessage" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.detailMessage"></a>

```typescript
public readonly detailMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectInsightsConfigErrorsDetails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails">GoogleDeveloperConnectInsightsConfigErrorsDetails</a>

---


### GoogleDeveloperConnectInsightsConfigErrorsList <a name="GoogleDeveloperConnectInsightsConfigErrorsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.get"></a>

```typescript
public get(index: number): GoogleDeveloperConnectInsightsConfigErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigErrorsOutputReference <a name="GoogleDeveloperConnectInsightsConfigErrorsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.details">details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList">GoogleDeveloperConnectInsightsConfigErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors">GoogleDeveloperConnectInsightsConfigErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.details"></a>

```typescript
public readonly details: GoogleDeveloperConnectInsightsConfigErrorsDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList">GoogleDeveloperConnectInsightsConfigErrorsDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectInsightsConfigErrors;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors">GoogleDeveloperConnectInsightsConfigErrors</a>

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get"></a>

```typescript
public get(index: number): GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.criticality">criticality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.workload">workload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.criticality"></a>

```typescript
public readonly criticality: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `workload`<sup>Required</sup> <a name="workload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.workload"></a>

```typescript
public readonly workload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload</a>

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get"></a>

```typescript
public get(index: number): GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.deployment">deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload</a>

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsList <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.get"></a>

```typescript
public get(index: number): GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.appHubWorkload">appHubWorkload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.gkeWorkload">gkeWorkload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs">GoogleDeveloperConnectInsightsConfigRuntimeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appHubWorkload`<sup>Required</sup> <a name="appHubWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.appHubWorkload"></a>

```typescript
public readonly appHubWorkload: GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList</a>

---

##### `gkeWorkload`<sup>Required</sup> <a name="gkeWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.gkeWorkload"></a>

```typescript
public readonly gkeWorkload: GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectInsightsConfigRuntimeConfigs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs">GoogleDeveloperConnectInsightsConfigRuntimeConfigs</a>

---


### GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference <a name="GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectInsightsConfig } from '@cdktf/provider-google-beta'

new googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDeveloperConnectInsightsConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

---



