# `googleMonitoringAlertPolicy` Submodule <a name="`googleMonitoringAlertPolicy` Submodule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringAlertPolicy <a name="GoogleMonitoringAlertPolicy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy google_monitoring_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy(scope: Construct, id: string, config: GoogleMonitoringAlertPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig">GoogleMonitoringAlertPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig">GoogleMonitoringAlertPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy">putAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation">putDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetAlertStrategy">resetAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetNotificationChannels">resetNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlertStrategy` <a name="putAlertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy"></a>

```typescript
public putAlertStrategy(value: GoogleMonitoringAlertPolicyAlertStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GoogleMonitoringAlertPolicyConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>[]

---

##### `putDocumentation` <a name="putDocumentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation"></a>

```typescript
public putDocumentation(value: GoogleMonitoringAlertPolicyDocumentation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMonitoringAlertPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>

---

##### `resetAlertStrategy` <a name="resetAlertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetAlertStrategy"></a>

```typescript
public resetAlertStrategy(): void
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetDocumentation"></a>

```typescript
public resetDocumentation(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotificationChannels` <a name="resetNotificationChannels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetNotificationChannels"></a>

```typescript
public resetNotificationChannels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetUserLabels"></a>

```typescript
public resetUserLabels(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleMonitoringAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMonitoringAlertPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMonitoringAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategy">alertStrategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference">GoogleMonitoringAlertPolicyAlertStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList">GoogleMonitoringAlertPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.creationRecord">creationRecord</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList">GoogleMonitoringAlertPolicyCreationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference">GoogleMonitoringAlertPolicyDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference">GoogleMonitoringAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategyInput">alertStrategyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combinerInput">combinerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentationInput">documentationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannelsInput">notificationChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabelsInput">userLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combiner">combiner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannels">notificationChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alertStrategy`<sup>Required</sup> <a name="alertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategy"></a>

```typescript
public readonly alertStrategy: GoogleMonitoringAlertPolicyAlertStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference">GoogleMonitoringAlertPolicyAlertStrategyOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditions"></a>

```typescript
public readonly conditions: GoogleMonitoringAlertPolicyConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList">GoogleMonitoringAlertPolicyConditionsList</a>

---

##### `creationRecord`<sup>Required</sup> <a name="creationRecord" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.creationRecord"></a>

```typescript
public readonly creationRecord: GoogleMonitoringAlertPolicyCreationRecordList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList">GoogleMonitoringAlertPolicyCreationRecordList</a>

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentation"></a>

```typescript
public readonly documentation: GoogleMonitoringAlertPolicyDocumentationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference">GoogleMonitoringAlertPolicyDocumentationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMonitoringAlertPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference">GoogleMonitoringAlertPolicyTimeoutsOutputReference</a>

---

##### `alertStrategyInput`<sup>Optional</sup> <a name="alertStrategyInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategyInput"></a>

```typescript
public readonly alertStrategyInput: GoogleMonitoringAlertPolicyAlertStrategy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

---

##### `combinerInput`<sup>Optional</sup> <a name="combinerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combinerInput"></a>

```typescript
public readonly combinerInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GoogleMonitoringAlertPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentationInput"></a>

```typescript
public readonly documentationInput: GoogleMonitoringAlertPolicyDocumentation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notificationChannelsInput`<sup>Optional</sup> <a name="notificationChannelsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannelsInput"></a>

```typescript
public readonly notificationChannelsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMonitoringAlertPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabelsInput"></a>

```typescript
public readonly userLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `combiner`<sup>Required</sup> <a name="combiner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combiner"></a>

```typescript
public readonly combiner: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationChannels`<sup>Required</sup> <a name="notificationChannels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannels"></a>

```typescript
public readonly notificationChannels: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringAlertPolicyAlertStrategy <a name="GoogleMonitoringAlertPolicyAlertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyAlertStrategy: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.autoClose">autoClose</a></code> | <code>string</code> | If an alert policy that was active has no data for this long, any open incidents will close. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy">notificationChannelStrategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>[]</code> | notification_channel_strategy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationPrompts">notificationPrompts</a></code> | <code>string[]</code> | Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationRateLimit">notificationRateLimit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | notification_rate_limit block. |

---

##### `autoClose`<sup>Optional</sup> <a name="autoClose" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.autoClose"></a>

```typescript
public readonly autoClose: string;
```

- *Type:* string

If an alert policy that was active has no data for this long, any open incidents will close.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#auto_close GoogleMonitoringAlertPolicy#auto_close}

---

##### `notificationChannelStrategy`<sup>Optional</sup> <a name="notificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy"></a>

```typescript
public readonly notificationChannelStrategy: IResolvable | GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>[]

notification_channel_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_channel_strategy GoogleMonitoringAlertPolicy#notification_channel_strategy}

---

##### `notificationPrompts`<sup>Optional</sup> <a name="notificationPrompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationPrompts"></a>

```typescript
public readonly notificationPrompts: string[];
```

- *Type:* string[]

Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_prompts GoogleMonitoringAlertPolicy#notification_prompts}

---

##### `notificationRateLimit`<sup>Optional</sup> <a name="notificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationRateLimit"></a>

```typescript
public readonly notificationRateLimit: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

notification_rate_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_rate_limit GoogleMonitoringAlertPolicy#notification_rate_limit}

---

### GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames">notificationChannelNames</a></code> | <code>string[]</code> | The notification channels that these settings apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval">renotifyInterval</a></code> | <code>string</code> | The frequency at which to send reminder notifications for open incidents. |

---

##### `notificationChannelNames`<sup>Optional</sup> <a name="notificationChannelNames" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames"></a>

```typescript
public readonly notificationChannelNames: string[];
```

- *Type:* string[]

The notification channels that these settings apply to.

Each of these
correspond to the name field in one of the NotificationChannel objects
referenced in the notification_channels field of this AlertPolicy. The format is
'projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_channel_names GoogleMonitoringAlertPolicy#notification_channel_names}

---

##### `renotifyInterval`<sup>Optional</sup> <a name="renotifyInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval"></a>

```typescript
public readonly renotifyInterval: string;
```

- *Type:* string

The frequency at which to send reminder notifications for open incidents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#renotify_interval GoogleMonitoringAlertPolicy#renotify_interval}

---

### GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyAlertStrategyNotificationRateLimit: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period">period</a></code> | <code>string</code> | Not more than one notification per period. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Not more than one notification per period.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "60.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#period GoogleMonitoringAlertPolicy#period}

---

### GoogleMonitoringAlertPolicyConditions <a name="GoogleMonitoringAlertPolicyConditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditions: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.displayName">displayName</a></code> | <code>string</code> | A short name or phrase used to identify the condition in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionAbsent">conditionAbsent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a></code> | condition_absent block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMatchedLog">conditionMatchedLog</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | condition_matched_log block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage">conditionMonitoringQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | condition_monitoring_query_language block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage">conditionPrometheusQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | condition_prometheus_query_language block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionSql">conditionSql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a></code> | condition_sql block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionThreshold">conditionThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a></code> | condition_threshold block. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A short name or phrase used to identify the condition in dashboards, notifications, and incidents.

To avoid confusion, don't use the same
display name for multiple conditions in the same
policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `conditionAbsent`<sup>Optional</sup> <a name="conditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionAbsent"></a>

```typescript
public readonly conditionAbsent: GoogleMonitoringAlertPolicyConditionsConditionAbsent;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

condition_absent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_absent GoogleMonitoringAlertPolicy#condition_absent}

---

##### `conditionMatchedLog`<sup>Optional</sup> <a name="conditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMatchedLog"></a>

```typescript
public readonly conditionMatchedLog: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

condition_matched_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_matched_log GoogleMonitoringAlertPolicy#condition_matched_log}

---

##### `conditionMonitoringQueryLanguage`<sup>Optional</sup> <a name="conditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage"></a>

```typescript
public readonly conditionMonitoringQueryLanguage: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

condition_monitoring_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_monitoring_query_language GoogleMonitoringAlertPolicy#condition_monitoring_query_language}

---

##### `conditionPrometheusQueryLanguage`<sup>Optional</sup> <a name="conditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage"></a>

```typescript
public readonly conditionPrometheusQueryLanguage: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

condition_prometheus_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_prometheus_query_language GoogleMonitoringAlertPolicy#condition_prometheus_query_language}

---

##### `conditionSql`<sup>Optional</sup> <a name="conditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionSql"></a>

```typescript
public readonly conditionSql: GoogleMonitoringAlertPolicyConditionsConditionSql;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

condition_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_sql GoogleMonitoringAlertPolicy#condition_sql}

---

##### `conditionThreshold`<sup>Optional</sup> <a name="conditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionThreshold"></a>

```typescript
public readonly conditionThreshold: GoogleMonitoringAlertPolicyConditionsConditionThreshold;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

condition_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_threshold GoogleMonitoringAlertPolicy#condition_threshold}

---

### GoogleMonitoringAlertPolicyConditionsConditionAbsent <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionAbsent: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.duration">duration</a></code> | <code>string</code> | The amount of time that a time series must fail to report new data to be considered failing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.aggregations">aggregations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>[]</code> | aggregations block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.filter">filter</a></code> | <code>string</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | trigger block. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The amount of time that a time series must fail to report new data to be considered failing.

Currently, only values that are a
multiple of a minute--e.g. 60s, 120s, or 300s
--are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.aggregations"></a>

```typescript
public readonly aggregations: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>[]

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.trigger"></a>

```typescript
public readonly trigger: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

### GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionAbsentAggregations: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod">alignmentPeriod</a></code> | <code>string</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>string</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner">perSeriesAligner</a></code> | <code>string</code> | The approach to be used to align individual time series. |

---

##### `alignmentPeriod`<sup>Optional</sup> <a name="alignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod"></a>

```typescript
public readonly alignmentPeriod: string;
```

- *Type:* string

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}

---

##### `crossSeriesReducer`<sup>Optional</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer"></a>

```typescript
public readonly crossSeriesReducer: string;
```

- *Type:* string

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}

---

##### `perSeriesAligner`<sup>Optional</sup> <a name="perSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner"></a>

```typescript
public readonly perSeriesAligner: string;
```

- *Type:* string

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}

---

### GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionAbsentTrigger: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count">count</a></code> | <code>number</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent">percent</a></code> | <code>number</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

### GoogleMonitoringAlertPolicyConditionsConditionMatchedLog <a name="GoogleMonitoringAlertPolicyConditionsConditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionMatchedLog: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.filter">filter</a></code> | <code>string</code> | A logs-based filter. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors">labelExtractors</a></code> | <code>{[ key: string ]: string}</code> | A map from a label key to an extractor expression, which is used to extract the value for this label key. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

A logs-based filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

##### `labelExtractors`<sup>Optional</sup> <a name="labelExtractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors"></a>

```typescript
public readonly labelExtractors: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map from a label key to an extractor expression, which is used to extract the value for this label key.

Each entry in this map is
a specification for how data should be extracted from log entries that
match filter. Each combination of extracted values is treated as
a separate rule for the purposes of triggering notifications.
Label keys and corresponding values can be used in notifications
generated by this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#label_extractors GoogleMonitoringAlertPolicy#label_extractors}

---

### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration">duration</a></code> | <code>string</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query">query</a></code> | <code>string</code> | Monitoring Query Language query that outputs a boolean stream. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData">evaluationMissingData</a></code> | <code>string</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | trigger block. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Monitoring Query Language query that outputs a boolean stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

##### `evaluationMissingData`<sup>Optional</sup> <a name="evaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData"></a>

```typescript
public readonly evaluationMissingData: string;
```

- *Type:* string

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger"></a>

```typescript
public readonly trigger: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count">count</a></code> | <code>number</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent">percent</a></code> | <code>number</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

### GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage <a name="GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query">query</a></code> | <code>string</code> | The PromQL expression to evaluate. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule">alertRule</a></code> | <code>string</code> | The alerting rule name of this alert in the corresponding Prometheus configuration file. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation">disableMetricValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable metric existence validation for this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration">duration</a></code> | <code>string</code> | Alerts are considered firing once their PromQL expression evaluated to be "true" for this long. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval">evaluationInterval</a></code> | <code>string</code> | How often this rule should be evaluated. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to add to or overwrite in the PromQL query result. Label names must be valid. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup">ruleGroup</a></code> | <code>string</code> | The rule group name of this alert in the corresponding Prometheus configuration file. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The PromQL expression to evaluate.

Every evaluation cycle this
expression is evaluated at the current time, and all resultant time
series become pending/firing alerts. This field must not be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

##### `alertRule`<sup>Optional</sup> <a name="alertRule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule"></a>

```typescript
public readonly alertRule: string;
```

- *Type:* string

The alerting rule name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future.

This field is optional. If this field is not empty, then it must be a
valid Prometheus label name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alert_rule GoogleMonitoringAlertPolicy#alert_rule}

---

##### `disableMetricValidation`<sup>Optional</sup> <a name="disableMetricValidation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation"></a>

```typescript
public readonly disableMetricValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable metric existence validation for this condition.

This allows alerting policies to be defined on metrics that do not yet
exist, improving advanced customer workflows such as configuring
alerting policies using Terraform.

Users with the 'monitoring.alertPolicyViewer' role are able to see the
name of the non-existent metric in the alerting policy condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#disable_metric_validation GoogleMonitoringAlertPolicy#disable_metric_validation}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Alerts are considered firing once their PromQL expression evaluated to be "true" for this long.

Alerts whose PromQL expression was not
evaluated to be "true" for long enough are considered pending. The
default value is zero. Must be zero or positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `evaluationInterval`<sup>Optional</sup> <a name="evaluationInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval"></a>

```typescript
public readonly evaluationInterval: string;
```

- *Type:* string

How often this rule should be evaluated.

Must be a positive multiple
of 30 seconds or missing. The default value is 30 seconds. If this
PrometheusQueryLanguageCondition was generated from a Prometheus
alerting rule, then this value should be taken from the enclosing
rule group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#evaluation_interval GoogleMonitoringAlertPolicy#evaluation_interval}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to add to or overwrite in the PromQL query result. Label names must be valid.

Label values can be templatized by using variables. The only available
variable names are the names of the labels in the PromQL result,
although label names beginning with \_\_ (two "\_") are reserved for
internal use. "labels" may be empty. This field is intended to be used
for organizing and identifying the AlertPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#labels GoogleMonitoringAlertPolicy#labels}

---

##### `ruleGroup`<sup>Optional</sup> <a name="ruleGroup" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup"></a>

```typescript
public readonly ruleGroup: string;
```

- *Type:* string

The rule group name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future. This field is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#rule_group GoogleMonitoringAlertPolicy#rule_group}

---

### GoogleMonitoringAlertPolicyConditionsConditionSql <a name="GoogleMonitoringAlertPolicyConditionsConditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionSql: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.query">query</a></code> | <code>string</code> | The Log Analytics SQL query to run, as a string. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.booleanTest">booleanTest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | boolean_test block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.hourly">hourly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | hourly block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.minutes">minutes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | minutes block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.rowCountTest">rowCountTest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | row_count_test block. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The Log Analytics SQL query to run, as a string.

The query must
conform to the required shape. Specifically, the query must not try to
filter the input by time.  A filter will automatically be applied
to filter the input so that the query receives all rows received
since the last time the query was run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

##### `booleanTest`<sup>Optional</sup> <a name="booleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.booleanTest"></a>

```typescript
public readonly booleanTest: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

boolean_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#boolean_test GoogleMonitoringAlertPolicy#boolean_test}

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.daily"></a>

```typescript
public readonly daily: GoogleMonitoringAlertPolicyConditionsConditionSqlDaily;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#daily GoogleMonitoringAlertPolicy#daily}

---

##### `hourly`<sup>Optional</sup> <a name="hourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.hourly"></a>

```typescript
public readonly hourly: GoogleMonitoringAlertPolicyConditionsConditionSqlHourly;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#hourly GoogleMonitoringAlertPolicy#hourly}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.minutes"></a>

```typescript
public readonly minutes: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

minutes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#minutes GoogleMonitoringAlertPolicy#minutes}

---

##### `rowCountTest`<sup>Optional</sup> <a name="rowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.rowCountTest"></a>

```typescript
public readonly rowCountTest: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

row_count_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#row_count_test GoogleMonitoringAlertPolicy#row_count_test}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionSqlBooleanTest: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column">column</a></code> | <code>string</code> | The name of the column containing the boolean value. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

The name of the column containing the boolean value.

If the value
in a row is NULL, that row is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#column GoogleMonitoringAlertPolicy#column}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlDaily <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDaily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionSqlDaily: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity">periodicity</a></code> | <code>number</code> | The number of days between runs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime">executionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | execution_time block. |

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity"></a>

```typescript
public readonly periodicity: number;
```

- *Type:* number

The number of days between runs.

Must be greater than or equal
to 1 day and less than or equal to 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

##### `executionTime`<sup>Optional</sup> <a name="executionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime"></a>

```typescript
public readonly executionTime: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

execution_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#execution_time GoogleMonitoringAlertPolicy#execution_time}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours">hours</a></code> | <code>number</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of a day in 24 hour format.

Must be greater than or equal
to 0 and typically must be less than or equal to 23. An API may
choose to allow the value "24:00:00" for scenarios like business
closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#hours GoogleMonitoringAlertPolicy#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#minutes GoogleMonitoringAlertPolicy#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#nanos GoogleMonitoringAlertPolicy#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of a minute.

Must be greater than or equal to 0 and
typically must be less than or equal to 59. An API may allow the
value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#seconds GoogleMonitoringAlertPolicy#seconds}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlHourly <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlHourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionSqlHourly: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity">periodicity</a></code> | <code>number</code> | Number of hours between runs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset">minuteOffset</a></code> | <code>number</code> | The number of minutes after the hour (in UTC) to run the query. |

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity"></a>

```typescript
public readonly periodicity: number;
```

- *Type:* number

Number of hours between runs.

The interval must be greater than or
equal to 1 hour and less than or equal to 48 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

##### `minuteOffset`<sup>Optional</sup> <a name="minuteOffset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset"></a>

```typescript
public readonly minuteOffset: number;
```

- *Type:* number

The number of minutes after the hour (in UTC) to run the query.

Must be greater than or equal to 0 minutes and less than or equal to
59 minutes.  If left unspecified, then an arbitrary offset is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#minute_offset GoogleMonitoringAlertPolicy#minute_offset}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionSqlMinutes: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity">periodicity</a></code> | <code>number</code> | Number of minutes between runs. |

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity"></a>

```typescript
public readonly periodicity: number;
```

- *Type:* number

Number of minutes between runs.

The interval must be greater than or
equal to 5 minutes and less than or equal to 1440 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionSqlRowCountTest: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison">comparison</a></code> | <code>string</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold">threshold</a></code> | <code>number</code> | Test the boolean value in the indicated column. |

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#comparison GoogleMonitoringAlertPolicy#comparison}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Test the boolean value in the indicated column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#threshold GoogleMonitoringAlertPolicy#threshold}

---

### GoogleMonitoringAlertPolicyConditionsConditionThreshold <a name="GoogleMonitoringAlertPolicyConditionsConditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionThreshold: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.comparison">comparison</a></code> | <code>string</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.duration">duration</a></code> | <code>string</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.aggregations">aggregations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>[]</code> | aggregations block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations">denominatorAggregations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>[]</code> | denominator_aggregations block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter">denominatorFilter</a></code> | <code>string</code> | A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData">evaluationMissingData</a></code> | <code>string</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.filter">filter</a></code> | <code>string</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions">forecastOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | forecast_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | A value against which to compare the time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | trigger block. |

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#comparison GoogleMonitoringAlertPolicy#comparison}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.aggregations"></a>

```typescript
public readonly aggregations: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>[]

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}

---

##### `denominatorAggregations`<sup>Optional</sup> <a name="denominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations"></a>

```typescript
public readonly denominatorAggregations: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>[]

denominator_aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#denominator_aggregations GoogleMonitoringAlertPolicy#denominator_aggregations}

---

##### `denominatorFilter`<sup>Optional</sup> <a name="denominatorFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter"></a>

```typescript
public readonly denominatorFilter: string;
```

- *Type:* string

A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold.

If
a denominator_filter is specified, the time
series specified by the filter field will be
used as the numerator.The filter is similar
to the one that is specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#denominator_filter GoogleMonitoringAlertPolicy#denominator_filter}

---

##### `evaluationMissingData`<sup>Optional</sup> <a name="evaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData"></a>

```typescript
public readonly evaluationMissingData: string;
```

- *Type:* string

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

##### `forecastOptions`<sup>Optional</sup> <a name="forecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions"></a>

```typescript
public readonly forecastOptions: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

forecast_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#forecast_options GoogleMonitoringAlertPolicy#forecast_options}

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

A value against which to compare the time series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#threshold_value GoogleMonitoringAlertPolicy#threshold_value}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.trigger"></a>

```typescript
public readonly trigger: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionThresholdAggregations: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod">alignmentPeriod</a></code> | <code>string</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>string</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner">perSeriesAligner</a></code> | <code>string</code> | The approach to be used to align individual time series. |

---

##### `alignmentPeriod`<sup>Optional</sup> <a name="alignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod"></a>

```typescript
public readonly alignmentPeriod: string;
```

- *Type:* string

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}

---

##### `crossSeriesReducer`<sup>Optional</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer"></a>

```typescript
public readonly crossSeriesReducer: string;
```

- *Type:* string

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}

---

##### `perSeriesAligner`<sup>Optional</sup> <a name="perSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner"></a>

```typescript
public readonly perSeriesAligner: string;
```

- *Type:* string

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod">alignmentPeriod</a></code> | <code>string</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>string</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner">perSeriesAligner</a></code> | <code>string</code> | The approach to be used to align individual time series. |

---

##### `alignmentPeriod`<sup>Optional</sup> <a name="alignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod"></a>

```typescript
public readonly alignmentPeriod: string;
```

- *Type:* string

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}

---

##### `crossSeriesReducer`<sup>Optional</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer"></a>

```typescript
public readonly crossSeriesReducer: string;
```

- *Type:* string

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}

---

##### `perSeriesAligner`<sup>Optional</sup> <a name="perSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner"></a>

```typescript
public readonly perSeriesAligner: string;
```

- *Type:* string

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon">forecastHorizon</a></code> | <code>string</code> | The length of time into the future to forecast whether a timeseries will violate the threshold. |

---

##### `forecastHorizon`<sup>Required</sup> <a name="forecastHorizon" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon"></a>

```typescript
public readonly forecastHorizon: string;
```

- *Type:* string

The length of time into the future to forecast whether a timeseries will violate the threshold.

If the predicted value is found to violate the
threshold, and the violation is observed in all
forecasts made for the Configured 'duration',
then the timeseries is considered to be failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#forecast_horizon GoogleMonitoringAlertPolicy#forecast_horizon}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConditionsConditionThresholdTrigger: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count">count</a></code> | <code>number</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent">percent</a></code> | <code>number</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

### GoogleMonitoringAlertPolicyConfig <a name="GoogleMonitoringAlertPolicyConfig" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyConfig: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.combiner">combiner</a></code> | <code>string</code> | How to combine the results of multiple conditions to determine if an incident should be opened. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | A short name or phrase used to identify the policy in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.alertStrategy">alertStrategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | alert_strategy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the policy is enabled. The default is true. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#id GoogleMonitoringAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.notificationChannels">notificationChannels</a></code> | <code>string[]</code> | Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#project GoogleMonitoringAlertPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.severity">severity</a></code> | <code>string</code> | The severity of an alert policy indicates how important incidents generated by that policy are. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `combiner`<sup>Required</sup> <a name="combiner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.combiner"></a>

```typescript
public readonly combiner: string;
```

- *Type:* string

How to combine the results of multiple conditions to determine if an incident should be opened.

Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#combiner GoogleMonitoringAlertPolicy#combiner}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GoogleMonitoringAlertPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#conditions GoogleMonitoringAlertPolicy#conditions}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A short name or phrase used to identify the policy in dashboards, notifications, and incidents.

To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `alertStrategy`<sup>Optional</sup> <a name="alertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.alertStrategy"></a>

```typescript
public readonly alertStrategy: GoogleMonitoringAlertPolicyAlertStrategy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

alert_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alert_strategy GoogleMonitoringAlertPolicy#alert_strategy}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.documentation"></a>

```typescript
public readonly documentation: GoogleMonitoringAlertPolicyDocumentation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#documentation GoogleMonitoringAlertPolicy#documentation}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the policy is enabled. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#enabled GoogleMonitoringAlertPolicy#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#id GoogleMonitoringAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationChannels`<sup>Optional</sup> <a name="notificationChannels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.notificationChannels"></a>

```typescript
public readonly notificationChannels: string[];
```

- *Type:* string[]

Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident.

Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_channels GoogleMonitoringAlertPolicy#notification_channels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#project GoogleMonitoringAlertPolicy#project}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The severity of an alert policy indicates how important incidents generated by that policy are.

The severity level will be displayed on the Incident
detail page and in notifications. Possible values: ["CRITICAL", "ERROR", "WARNING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#severity GoogleMonitoringAlertPolicy#severity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMonitoringAlertPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#timeouts GoogleMonitoringAlertPolicy#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#user_labels GoogleMonitoringAlertPolicy#user_labels}

---

### GoogleMonitoringAlertPolicyCreationRecord <a name="GoogleMonitoringAlertPolicyCreationRecord" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyCreationRecord: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord = { ... }
```


### GoogleMonitoringAlertPolicyDocumentation <a name="GoogleMonitoringAlertPolicyDocumentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyDocumentation: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.content">content</a></code> | <code>string</code> | The text of the documentation, interpreted according to mimeType. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.links">links</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>[]</code> | links block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.mimeType">mimeType</a></code> | <code>string</code> | The format of the content field. Presently, only the value "text/markdown" is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.subject">subject</a></code> | <code>string</code> | The subject line of the notification. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The text of the documentation, interpreted according to mimeType.

The content may not exceed 8,192 Unicode characters and may not
exceed more than 10,240 bytes when encoded in UTF-8 format,
whichever is smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#content GoogleMonitoringAlertPolicy#content}

---

##### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.links"></a>

```typescript
public readonly links: IResolvable | GoogleMonitoringAlertPolicyDocumentationLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>[]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#links GoogleMonitoringAlertPolicy#links}

---

##### `mimeType`<sup>Optional</sup> <a name="mimeType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

The format of the content field. Presently, only the value "text/markdown" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#mime_type GoogleMonitoringAlertPolicy#mime_type}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

The subject line of the notification.

The subject line may not
exceed 10,240 bytes. In notifications generated by this policy the contents
of the subject line after variable expansion will be truncated to 255 bytes
or shorter at the latest UTF-8 character boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#subject GoogleMonitoringAlertPolicy#subject}

---

### GoogleMonitoringAlertPolicyDocumentationLinks <a name="GoogleMonitoringAlertPolicyDocumentationLinks" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyDocumentationLinks: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.displayName">displayName</a></code> | <code>string</code> | A short display name for the link. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.url">url</a></code> | <code>string</code> | The url of a webpage. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A short display name for the link.

The display name must not be empty or exceed 63 characters. Example: "playbook".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The url of a webpage.

A url can be templatized by using variables in the path or the query parameters. The total length of a URL should not exceed 2083 characters before and after variable expansion. Example: "https://my_domain.com/playbook?name=${resource.name}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#url GoogleMonitoringAlertPolicy#url}

---

### GoogleMonitoringAlertPolicyTimeouts <a name="GoogleMonitoringAlertPolicyTimeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

const googleMonitoringAlertPolicyTimeouts: googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#create GoogleMonitoringAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#delete GoogleMonitoringAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#update GoogleMonitoringAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#create GoogleMonitoringAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#delete GoogleMonitoringAlertPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#update GoogleMonitoringAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get"></a>

```typescript
public get(index: number): GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>[]

---


### GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames">resetNotificationChannelNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval">resetRenotifyInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotificationChannelNames` <a name="resetNotificationChannelNames" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames"></a>

```typescript
public resetNotificationChannelNames(): void
```

##### `resetRenotifyInterval` <a name="resetRenotifyInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval"></a>

```typescript
public resetRenotifyInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput">notificationChannelNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput">renotifyIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames">notificationChannelNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval">renotifyInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationChannelNamesInput`<sup>Optional</sup> <a name="notificationChannelNamesInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput"></a>

```typescript
public readonly notificationChannelNamesInput: string[];
```

- *Type:* string[]

---

##### `renotifyIntervalInput`<sup>Optional</sup> <a name="renotifyIntervalInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput"></a>

```typescript
public readonly renotifyIntervalInput: string;
```

- *Type:* string

---

##### `notificationChannelNames`<sup>Required</sup> <a name="notificationChannelNames" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames"></a>

```typescript
public readonly notificationChannelNames: string[];
```

- *Type:* string[]

---

##### `renotifyInterval`<sup>Required</sup> <a name="renotifyInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval"></a>

```typescript
public readonly renotifyInterval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>

---


### GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---


### GoogleMonitoringAlertPolicyAlertStrategyOutputReference <a name="GoogleMonitoringAlertPolicyAlertStrategyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy">putNotificationChannelStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit">putNotificationRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose">resetAutoClose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy">resetNotificationChannelStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts">resetNotificationPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit">resetNotificationRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationChannelStrategy` <a name="putNotificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy"></a>

```typescript
public putNotificationChannelStrategy(value: IResolvable | GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>[]

---

##### `putNotificationRateLimit` <a name="putNotificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit"></a>

```typescript
public putNotificationRateLimit(value: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---

##### `resetAutoClose` <a name="resetAutoClose" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose"></a>

```typescript
public resetAutoClose(): void
```

##### `resetNotificationChannelStrategy` <a name="resetNotificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy"></a>

```typescript
public resetNotificationChannelStrategy(): void
```

##### `resetNotificationPrompts` <a name="resetNotificationPrompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts"></a>

```typescript
public resetNotificationPrompts(): void
```

##### `resetNotificationRateLimit` <a name="resetNotificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit"></a>

```typescript
public resetNotificationRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy">notificationChannelStrategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit">notificationRateLimit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput">autoCloseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput">notificationChannelStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput">notificationPromptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput">notificationRateLimitInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose">autoClose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts">notificationPrompts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationChannelStrategy`<sup>Required</sup> <a name="notificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy"></a>

```typescript
public readonly notificationChannelStrategy: GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a>

---

##### `notificationRateLimit`<sup>Required</sup> <a name="notificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit"></a>

```typescript
public readonly notificationRateLimit: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a>

---

##### `autoCloseInput`<sup>Optional</sup> <a name="autoCloseInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput"></a>

```typescript
public readonly autoCloseInput: string;
```

- *Type:* string

---

##### `notificationChannelStrategyInput`<sup>Optional</sup> <a name="notificationChannelStrategyInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput"></a>

```typescript
public readonly notificationChannelStrategyInput: IResolvable | GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>[]

---

##### `notificationPromptsInput`<sup>Optional</sup> <a name="notificationPromptsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput"></a>

```typescript
public readonly notificationPromptsInput: string[];
```

- *Type:* string[]

---

##### `notificationRateLimitInput`<sup>Optional</sup> <a name="notificationRateLimitInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput"></a>

```typescript
public readonly notificationRateLimitInput: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---

##### `autoClose`<sup>Required</sup> <a name="autoClose" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose"></a>

```typescript
public readonly autoClose: string;
```

- *Type:* string

---

##### `notificationPrompts`<sup>Required</sup> <a name="notificationPrompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts"></a>

```typescript
public readonly notificationPrompts: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyAlertStrategy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get"></a>

```typescript
public get(index: number): GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>[]

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod">resetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer">resetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner">resetPerSeriesAligner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignmentPeriod` <a name="resetAlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod"></a>

```typescript
public resetAlignmentPeriod(): void
```

##### `resetCrossSeriesReducer` <a name="resetCrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer"></a>

```typescript
public resetCrossSeriesReducer(): void
```

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields"></a>

```typescript
public resetGroupByFields(): void
```

##### `resetPerSeriesAligner` <a name="resetPerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner"></a>

```typescript
public resetPerSeriesAligner(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput">alignmentPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput">crossSeriesReducerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput">perSeriesAlignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod">alignmentPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner">perSeriesAligner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alignmentPeriodInput`<sup>Optional</sup> <a name="alignmentPeriodInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput"></a>

```typescript
public readonly alignmentPeriodInput: string;
```

- *Type:* string

---

##### `crossSeriesReducerInput`<sup>Optional</sup> <a name="crossSeriesReducerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```typescript
public readonly crossSeriesReducerInput: string;
```

- *Type:* string

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput"></a>

```typescript
public readonly groupByFieldsInput: string[];
```

- *Type:* string[]

---

##### `perSeriesAlignerInput`<sup>Optional</sup> <a name="perSeriesAlignerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```typescript
public readonly perSeriesAlignerInput: string;
```

- *Type:* string

---

##### `alignmentPeriod`<sup>Required</sup> <a name="alignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod"></a>

```typescript
public readonly alignmentPeriod: string;
```

- *Type:* string

---

##### `crossSeriesReducer`<sup>Required</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer"></a>

```typescript
public readonly crossSeriesReducer: string;
```

- *Type:* string

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

---

##### `perSeriesAligner`<sup>Required</sup> <a name="perSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner"></a>

```typescript
public readonly perSeriesAligner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations">putAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations">resetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAggregations` <a name="putAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations"></a>

```typescript
public putAggregations(value: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>[]

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger"></a>

```typescript
public putTrigger(value: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---

##### `resetAggregations` <a name="resetAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations"></a>

```typescript
public resetAggregations(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger"></a>

```typescript
public resetTrigger(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations">aggregations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput">aggregationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregations`<sup>Required</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations"></a>

```typescript
public readonly aggregations: GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger"></a>

```typescript
public readonly trigger: GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a>

---

##### `aggregationsInput`<sup>Optional</sup> <a name="aggregationsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput"></a>

```typescript
public readonly aggregationsInput: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>[]

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionAbsent;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent"></a>

```typescript
public resetPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput">percentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput"></a>

```typescript
public readonly percentInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors">resetLabelExtractors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelExtractors` <a name="resetLabelExtractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors"></a>

```typescript
public resetLabelExtractors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput">labelExtractorsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors">labelExtractors</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `labelExtractorsInput`<sup>Optional</sup> <a name="labelExtractorsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput"></a>

```typescript
public readonly labelExtractorsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `labelExtractors`<sup>Required</sup> <a name="labelExtractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors"></a>

```typescript
public readonly labelExtractors: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData">resetEvaluationMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger"></a>

```typescript
public putTrigger(value: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---

##### `resetEvaluationMissingData` <a name="resetEvaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData"></a>

```typescript
public resetEvaluationMissingData(): void
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger"></a>

```typescript
public resetTrigger(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput">evaluationMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData">evaluationMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger"></a>

```typescript
public readonly trigger: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `evaluationMissingDataInput`<sup>Optional</sup> <a name="evaluationMissingDataInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput"></a>

```typescript
public readonly evaluationMissingDataInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `evaluationMissingData`<sup>Required</sup> <a name="evaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData"></a>

```typescript
public readonly evaluationMissingData: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent"></a>

```typescript
public resetPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput">percentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput"></a>

```typescript
public readonly percentInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule">resetAlertRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation">resetDisableMetricValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval">resetEvaluationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup">resetRuleGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlertRule` <a name="resetAlertRule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule"></a>

```typescript
public resetAlertRule(): void
```

##### `resetDisableMetricValidation` <a name="resetDisableMetricValidation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation"></a>

```typescript
public resetDisableMetricValidation(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetEvaluationInterval` <a name="resetEvaluationInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval"></a>

```typescript
public resetEvaluationInterval(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRuleGroup` <a name="resetRuleGroup" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup"></a>

```typescript
public resetRuleGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput">alertRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput">disableMetricValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput">evaluationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput">ruleGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule">alertRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation">disableMetricValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval">evaluationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup">ruleGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertRuleInput`<sup>Optional</sup> <a name="alertRuleInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput"></a>

```typescript
public readonly alertRuleInput: string;
```

- *Type:* string

---

##### `disableMetricValidationInput`<sup>Optional</sup> <a name="disableMetricValidationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput"></a>

```typescript
public readonly disableMetricValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `evaluationIntervalInput`<sup>Optional</sup> <a name="evaluationIntervalInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput"></a>

```typescript
public readonly evaluationIntervalInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `ruleGroupInput`<sup>Optional</sup> <a name="ruleGroupInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput"></a>

```typescript
public readonly ruleGroupInput: string;
```

- *Type:* string

---

##### `alertRule`<sup>Required</sup> <a name="alertRule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule"></a>

```typescript
public readonly alertRule: string;
```

- *Type:* string

---

##### `disableMetricValidation`<sup>Required</sup> <a name="disableMetricValidation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation"></a>

```typescript
public readonly disableMetricValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `evaluationInterval`<sup>Required</sup> <a name="evaluationInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval"></a>

```typescript
public readonly evaluationInterval: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `ruleGroup`<sup>Required</sup> <a name="ruleGroup" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup"></a>

```typescript
public readonly ruleGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime">putExecutionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime">resetExecutionTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExecutionTime` <a name="putExecutionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime"></a>

```typescript
public putExecutionTime(value: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---

##### `resetExecutionTime` <a name="resetExecutionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime"></a>

```typescript
public resetExecutionTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime">executionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput">executionTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput">periodicityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity">periodicity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionTime`<sup>Required</sup> <a name="executionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime"></a>

```typescript
public readonly executionTime: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a>

---

##### `executionTimeInput`<sup>Optional</sup> <a name="executionTimeInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput"></a>

```typescript
public readonly executionTimeInput: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---

##### `periodicityInput`<sup>Optional</sup> <a name="periodicityInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput"></a>

```typescript
public readonly periodicityInput: number;
```

- *Type:* number

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity"></a>

```typescript
public readonly periodicity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionSqlDaily;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset">resetMinuteOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinuteOffset` <a name="resetMinuteOffset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset"></a>

```typescript
public resetMinuteOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput">minuteOffsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput">periodicityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset">minuteOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity">periodicity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minuteOffsetInput`<sup>Optional</sup> <a name="minuteOffsetInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput"></a>

```typescript
public readonly minuteOffsetInput: number;
```

- *Type:* number

---

##### `periodicityInput`<sup>Optional</sup> <a name="periodicityInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput"></a>

```typescript
public readonly periodicityInput: number;
```

- *Type:* number

---

##### `minuteOffset`<sup>Required</sup> <a name="minuteOffset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset"></a>

```typescript
public readonly minuteOffset: number;
```

- *Type:* number

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity"></a>

```typescript
public readonly periodicity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionSqlHourly;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput">periodicityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity">periodicity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodicityInput`<sup>Optional</sup> <a name="periodicityInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput"></a>

```typescript
public readonly periodicityInput: number;
```

- *Type:* number

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity"></a>

```typescript
public readonly periodicity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest">putBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily">putDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly">putHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes">putMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest">putRowCountTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest">resetBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly">resetHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest">resetRowCountTest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBooleanTest` <a name="putBooleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest"></a>

```typescript
public putBooleanTest(value: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---

##### `putDaily` <a name="putDaily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily"></a>

```typescript
public putDaily(value: GoogleMonitoringAlertPolicyConditionsConditionSqlDaily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

---

##### `putHourly` <a name="putHourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly"></a>

```typescript
public putHourly(value: GoogleMonitoringAlertPolicyConditionsConditionSqlHourly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

---

##### `putMinutes` <a name="putMinutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes"></a>

```typescript
public putMinutes(value: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---

##### `putRowCountTest` <a name="putRowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest"></a>

```typescript
public putRowCountTest(value: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---

##### `resetBooleanTest` <a name="resetBooleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest"></a>

```typescript
public resetBooleanTest(): void
```

##### `resetDaily` <a name="resetDaily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily"></a>

```typescript
public resetDaily(): void
```

##### `resetHourly` <a name="resetHourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly"></a>

```typescript
public resetHourly(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetRowCountTest` <a name="resetRowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest"></a>

```typescript
public resetRowCountTest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest">booleanTest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly">hourly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes">minutes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest">rowCountTest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput">booleanTestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput">dailyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput">hourlyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput">minutesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput">rowCountTestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanTest`<sup>Required</sup> <a name="booleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest"></a>

```typescript
public readonly booleanTest: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a>

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily"></a>

```typescript
public readonly daily: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a>

---

##### `hourly`<sup>Required</sup> <a name="hourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly"></a>

```typescript
public readonly hourly: GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a>

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes"></a>

```typescript
public readonly minutes: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a>

---

##### `rowCountTest`<sup>Required</sup> <a name="rowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest"></a>

```typescript
public readonly rowCountTest: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a>

---

##### `booleanTestInput`<sup>Optional</sup> <a name="booleanTestInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput"></a>

```typescript
public readonly booleanTestInput: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput"></a>

```typescript
public readonly dailyInput: GoogleMonitoringAlertPolicyConditionsConditionSqlDaily;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

---

##### `hourlyInput`<sup>Optional</sup> <a name="hourlyInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput"></a>

```typescript
public readonly hourlyInput: GoogleMonitoringAlertPolicyConditionsConditionSqlHourly;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `rowCountTestInput`<sup>Optional</sup> <a name="rowCountTestInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput"></a>

```typescript
public readonly rowCountTestInput: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionSql;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get"></a>

```typescript
public get(index: number): GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>[]

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod">resetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer">resetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner">resetPerSeriesAligner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignmentPeriod` <a name="resetAlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod"></a>

```typescript
public resetAlignmentPeriod(): void
```

##### `resetCrossSeriesReducer` <a name="resetCrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer"></a>

```typescript
public resetCrossSeriesReducer(): void
```

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields"></a>

```typescript
public resetGroupByFields(): void
```

##### `resetPerSeriesAligner` <a name="resetPerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner"></a>

```typescript
public resetPerSeriesAligner(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput">alignmentPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput">crossSeriesReducerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput">perSeriesAlignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod">alignmentPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner">perSeriesAligner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alignmentPeriodInput`<sup>Optional</sup> <a name="alignmentPeriodInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput"></a>

```typescript
public readonly alignmentPeriodInput: string;
```

- *Type:* string

---

##### `crossSeriesReducerInput`<sup>Optional</sup> <a name="crossSeriesReducerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```typescript
public readonly crossSeriesReducerInput: string;
```

- *Type:* string

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput"></a>

```typescript
public readonly groupByFieldsInput: string[];
```

- *Type:* string[]

---

##### `perSeriesAlignerInput`<sup>Optional</sup> <a name="perSeriesAlignerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```typescript
public readonly perSeriesAlignerInput: string;
```

- *Type:* string

---

##### `alignmentPeriod`<sup>Required</sup> <a name="alignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod"></a>

```typescript
public readonly alignmentPeriod: string;
```

- *Type:* string

---

##### `crossSeriesReducer`<sup>Required</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer"></a>

```typescript
public readonly crossSeriesReducer: string;
```

- *Type:* string

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

---

##### `perSeriesAligner`<sup>Required</sup> <a name="perSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner"></a>

```typescript
public readonly perSeriesAligner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get"></a>

```typescript
public get(index: number): GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>[]

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod">resetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer">resetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner">resetPerSeriesAligner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignmentPeriod` <a name="resetAlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod"></a>

```typescript
public resetAlignmentPeriod(): void
```

##### `resetCrossSeriesReducer` <a name="resetCrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer"></a>

```typescript
public resetCrossSeriesReducer(): void
```

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields"></a>

```typescript
public resetGroupByFields(): void
```

##### `resetPerSeriesAligner` <a name="resetPerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner"></a>

```typescript
public resetPerSeriesAligner(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput">alignmentPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput">crossSeriesReducerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput">perSeriesAlignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod">alignmentPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner">perSeriesAligner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alignmentPeriodInput`<sup>Optional</sup> <a name="alignmentPeriodInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput"></a>

```typescript
public readonly alignmentPeriodInput: string;
```

- *Type:* string

---

##### `crossSeriesReducerInput`<sup>Optional</sup> <a name="crossSeriesReducerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```typescript
public readonly crossSeriesReducerInput: string;
```

- *Type:* string

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput"></a>

```typescript
public readonly groupByFieldsInput: string[];
```

- *Type:* string[]

---

##### `perSeriesAlignerInput`<sup>Optional</sup> <a name="perSeriesAlignerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```typescript
public readonly perSeriesAlignerInput: string;
```

- *Type:* string

---

##### `alignmentPeriod`<sup>Required</sup> <a name="alignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod"></a>

```typescript
public readonly alignmentPeriod: string;
```

- *Type:* string

---

##### `crossSeriesReducer`<sup>Required</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer"></a>

```typescript
public readonly crossSeriesReducer: string;
```

- *Type:* string

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

---

##### `perSeriesAligner`<sup>Required</sup> <a name="perSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner"></a>

```typescript
public readonly perSeriesAligner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput">forecastHorizonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon">forecastHorizon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forecastHorizonInput`<sup>Optional</sup> <a name="forecastHorizonInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput"></a>

```typescript
public readonly forecastHorizonInput: string;
```

- *Type:* string

---

##### `forecastHorizon`<sup>Required</sup> <a name="forecastHorizon" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon"></a>

```typescript
public readonly forecastHorizon: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations">putAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations">putDenominatorAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions">putForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations">resetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations">resetDenominatorAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter">resetDenominatorFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData">resetEvaluationMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions">resetForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue">resetThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAggregations` <a name="putAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations"></a>

```typescript
public putAggregations(value: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>[]

---

##### `putDenominatorAggregations` <a name="putDenominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations"></a>

```typescript
public putDenominatorAggregations(value: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>[]

---

##### `putForecastOptions` <a name="putForecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions"></a>

```typescript
public putForecastOptions(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger"></a>

```typescript
public putTrigger(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---

##### `resetAggregations` <a name="resetAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations"></a>

```typescript
public resetAggregations(): void
```

##### `resetDenominatorAggregations` <a name="resetDenominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations"></a>

```typescript
public resetDenominatorAggregations(): void
```

##### `resetDenominatorFilter` <a name="resetDenominatorFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter"></a>

```typescript
public resetDenominatorFilter(): void
```

##### `resetEvaluationMissingData` <a name="resetEvaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData"></a>

```typescript
public resetEvaluationMissingData(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetForecastOptions` <a name="resetForecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions"></a>

```typescript
public resetForecastOptions(): void
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue"></a>

```typescript
public resetThresholdValue(): void
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger"></a>

```typescript
public resetTrigger(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations">aggregations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations">denominatorAggregations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions">forecastOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput">aggregationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput">denominatorAggregationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput">denominatorFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput">evaluationMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput">forecastOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter">denominatorFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData">evaluationMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregations`<sup>Required</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations"></a>

```typescript
public readonly aggregations: GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a>

---

##### `denominatorAggregations`<sup>Required</sup> <a name="denominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations"></a>

```typescript
public readonly denominatorAggregations: GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a>

---

##### `forecastOptions`<sup>Required</sup> <a name="forecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions"></a>

```typescript
public readonly forecastOptions: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger"></a>

```typescript
public readonly trigger: GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a>

---

##### `aggregationsInput`<sup>Optional</sup> <a name="aggregationsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput"></a>

```typescript
public readonly aggregationsInput: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>[]

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `denominatorAggregationsInput`<sup>Optional</sup> <a name="denominatorAggregationsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput"></a>

```typescript
public readonly denominatorAggregationsInput: IResolvable | GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>[]

---

##### `denominatorFilterInput`<sup>Optional</sup> <a name="denominatorFilterInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput"></a>

```typescript
public readonly denominatorFilterInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `evaluationMissingDataInput`<sup>Optional</sup> <a name="evaluationMissingDataInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput"></a>

```typescript
public readonly evaluationMissingDataInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `forecastOptionsInput`<sup>Optional</sup> <a name="forecastOptionsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput"></a>

```typescript
public readonly forecastOptionsInput: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput"></a>

```typescript
public readonly thresholdValueInput: number;
```

- *Type:* number

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `denominatorFilter`<sup>Required</sup> <a name="denominatorFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter"></a>

```typescript
public readonly denominatorFilter: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `evaluationMissingData`<sup>Required</sup> <a name="evaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData"></a>

```typescript
public readonly evaluationMissingData: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionThreshold;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent"></a>

```typescript
public resetPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput">percentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput"></a>

```typescript
public readonly percentInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---


### GoogleMonitoringAlertPolicyConditionsList <a name="GoogleMonitoringAlertPolicyConditionsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.get"></a>

```typescript
public get(index: number): GoogleMonitoringAlertPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>[]

---


### GoogleMonitoringAlertPolicyConditionsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent">putConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog">putConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage">putConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage">putConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql">putConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold">putConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent">resetConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog">resetConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage">resetConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage">resetConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionSql">resetConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold">resetConditionThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionAbsent` <a name="putConditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent"></a>

```typescript
public putConditionAbsent(value: GoogleMonitoringAlertPolicyConditionsConditionAbsent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

---

##### `putConditionMatchedLog` <a name="putConditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog"></a>

```typescript
public putConditionMatchedLog(value: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

---

##### `putConditionMonitoringQueryLanguage` <a name="putConditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage"></a>

```typescript
public putConditionMonitoringQueryLanguage(value: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---

##### `putConditionPrometheusQueryLanguage` <a name="putConditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage"></a>

```typescript
public putConditionPrometheusQueryLanguage(value: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---

##### `putConditionSql` <a name="putConditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql"></a>

```typescript
public putConditionSql(value: GoogleMonitoringAlertPolicyConditionsConditionSql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

---

##### `putConditionThreshold` <a name="putConditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold"></a>

```typescript
public putConditionThreshold(value: GoogleMonitoringAlertPolicyConditionsConditionThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

---

##### `resetConditionAbsent` <a name="resetConditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent"></a>

```typescript
public resetConditionAbsent(): void
```

##### `resetConditionMatchedLog` <a name="resetConditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog"></a>

```typescript
public resetConditionMatchedLog(): void
```

##### `resetConditionMonitoringQueryLanguage` <a name="resetConditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage"></a>

```typescript
public resetConditionMonitoringQueryLanguage(): void
```

##### `resetConditionPrometheusQueryLanguage` <a name="resetConditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage"></a>

```typescript
public resetConditionPrometheusQueryLanguage(): void
```

##### `resetConditionSql` <a name="resetConditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionSql"></a>

```typescript
public resetConditionSql(): void
```

##### `resetConditionThreshold` <a name="resetConditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold"></a>

```typescript
public resetConditionThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent">conditionAbsent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog">conditionMatchedLog</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage">conditionMonitoringQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage">conditionPrometheusQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSql">conditionSql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold">conditionThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput">conditionAbsentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput">conditionMatchedLogInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput">conditionMonitoringQueryLanguageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput">conditionPrometheusQueryLanguageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput">conditionSqlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput">conditionThresholdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionAbsent`<sup>Required</sup> <a name="conditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent"></a>

```typescript
public readonly conditionAbsent: GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference</a>

---

##### `conditionMatchedLog`<sup>Required</sup> <a name="conditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog"></a>

```typescript
public readonly conditionMatchedLog: GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a>

---

##### `conditionMonitoringQueryLanguage`<sup>Required</sup> <a name="conditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage"></a>

```typescript
public readonly conditionMonitoringQueryLanguage: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a>

---

##### `conditionPrometheusQueryLanguage`<sup>Required</sup> <a name="conditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage"></a>

```typescript
public readonly conditionPrometheusQueryLanguage: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a>

---

##### `conditionSql`<sup>Required</sup> <a name="conditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSql"></a>

```typescript
public readonly conditionSql: GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference</a>

---

##### `conditionThreshold`<sup>Required</sup> <a name="conditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold"></a>

```typescript
public readonly conditionThreshold: GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `conditionAbsentInput`<sup>Optional</sup> <a name="conditionAbsentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput"></a>

```typescript
public readonly conditionAbsentInput: GoogleMonitoringAlertPolicyConditionsConditionAbsent;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

---

##### `conditionMatchedLogInput`<sup>Optional</sup> <a name="conditionMatchedLogInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput"></a>

```typescript
public readonly conditionMatchedLogInput: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

---

##### `conditionMonitoringQueryLanguageInput`<sup>Optional</sup> <a name="conditionMonitoringQueryLanguageInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput"></a>

```typescript
public readonly conditionMonitoringQueryLanguageInput: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---

##### `conditionPrometheusQueryLanguageInput`<sup>Optional</sup> <a name="conditionPrometheusQueryLanguageInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput"></a>

```typescript
public readonly conditionPrometheusQueryLanguageInput: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---

##### `conditionSqlInput`<sup>Optional</sup> <a name="conditionSqlInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput"></a>

```typescript
public readonly conditionSqlInput: GoogleMonitoringAlertPolicyConditionsConditionSql;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

---

##### `conditionThresholdInput`<sup>Optional</sup> <a name="conditionThresholdInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput"></a>

```typescript
public readonly conditionThresholdInput: GoogleMonitoringAlertPolicyConditionsConditionThreshold;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>

---


### GoogleMonitoringAlertPolicyCreationRecordList <a name="GoogleMonitoringAlertPolicyCreationRecordList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.get"></a>

```typescript
public get(index: number): GoogleMonitoringAlertPolicyCreationRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMonitoringAlertPolicyCreationRecordOutputReference <a name="GoogleMonitoringAlertPolicyCreationRecordOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy">mutatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime">mutateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord">GoogleMonitoringAlertPolicyCreationRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mutatedBy`<sup>Required</sup> <a name="mutatedBy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy"></a>

```typescript
public readonly mutatedBy: string;
```

- *Type:* string

---

##### `mutateTime`<sup>Required</sup> <a name="mutateTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime"></a>

```typescript
public readonly mutateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyCreationRecord;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord">GoogleMonitoringAlertPolicyCreationRecord</a>

---


### GoogleMonitoringAlertPolicyDocumentationLinksList <a name="GoogleMonitoringAlertPolicyDocumentationLinksList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.get"></a>

```typescript
public get(index: number): GoogleMonitoringAlertPolicyDocumentationLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyDocumentationLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>[]

---


### GoogleMonitoringAlertPolicyDocumentationLinksOutputReference <a name="GoogleMonitoringAlertPolicyDocumentationLinksOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyDocumentationLinks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>

---


### GoogleMonitoringAlertPolicyDocumentationOutputReference <a name="GoogleMonitoringAlertPolicyDocumentationOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.putLinks">putLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetLinks">resetLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetMimeType">resetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinks` <a name="putLinks" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.putLinks"></a>

```typescript
public putLinks(value: IResolvable | GoogleMonitoringAlertPolicyDocumentationLinks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.putLinks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>[]

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetLinks` <a name="resetLinks" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetLinks"></a>

```typescript
public resetLinks(): void
```

##### `resetMimeType` <a name="resetMimeType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetMimeType"></a>

```typescript
public resetMimeType(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.links">links</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList">GoogleMonitoringAlertPolicyDocumentationLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.linksInput">linksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.links"></a>

```typescript
public readonly links: GoogleMonitoringAlertPolicyDocumentationLinksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList">GoogleMonitoringAlertPolicyDocumentationLinksList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `linksInput`<sup>Optional</sup> <a name="linksInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.linksInput"></a>

```typescript
public readonly linksInput: IResolvable | GoogleMonitoringAlertPolicyDocumentationLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>[]

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringAlertPolicyDocumentation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

---


### GoogleMonitoringAlertPolicyTimeoutsOutputReference <a name="GoogleMonitoringAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringAlertPolicy } from '@cdktf/provider-google-beta'

new googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringAlertPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>

---



